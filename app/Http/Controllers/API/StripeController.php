<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;
use Stripe;
use Mail;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\payment;
use Stripe\Customer;
use App\Models\Subscription;
use App\Models\User;
use App\Models\payout;
use App\Models\custom_payment_info;
use App\Models\subscription_item;
use App\Models\tbl_subscription;
use App\Mail\SubscriptionMail;
class StripeController extends Controller
{
  public function __construct()
    {
        return $this->middleware('auth:api');
    }
    public function stripePost(Request $request)
    { 


        try {
            $user_amount= $request->amount;
            $user_plan  = $request->description;
            $user_plan_id = $request->plan_id;
            $amounts =  $user_amount;
            $email = Auth::User()->email;
            $token   = $request->tokenization['id'];
            $user_id =  Auth::User()->id;
            $user_name =  Auth::User()->name;
            $plan = $user_plan;
            $user_discount = '0';
            $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET_KEY'));

            \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
                $charges = \Stripe\Charge::create([
                'amount' =>  (float)$amounts ,
                'currency' => 'usd',
                'description' => 'Customer Payment',
                'source' => $token,
                ]);
                if($charges){
                  $payments = payment::create([
                    'user_id' => $user_id,
                    'payment_id'=>$charges->id,
                    'plan'  => $plan,
                    'user_discount'=>$user_discount,
                    'method'=>'Stripe',
                  ]);
                  $subscription = new Subscription;
                  $subscription['user_id'] = $user_id;
                  $subscription['name'] =$user_name ;
                  $subscription['stripe_id'] =$charges->id;
                  $subscription['stripe_status'] =$charges->status;
                  $subscription['stripe_price'] =$charges->amount;
                  $subscription['quantity'] = 1;
                  $subscription['trial_ends_at'] = date('Y-m-d h:i:s');
                  $subscription['ends_at'] = date('Y-m-d h:i:s', strtotime('+1 years'));
                  $subscription->save();
                  $payout = new payout;
                  $payout['currency'] ='usd';
                  $payout['amount'] =$charges->amount;
                  $payout['payout_method'] ='Stripe';
                  $payout['user_id'] = $user_id;
                  $payout['status'] = 1;
                  $payout->save();
                  
                  $custom_payment_info = new custom_payment_info;
                  $custom_payment_info['subscrption_price'] = $charges->amount;
                  $custom_payment_info->save();

                  $subscription_items = new subscription_item;
                  $subscription_items['subscription_id'] = $subscription->id;
                  $subscription_items['stripe_id'] = $charges->id;
                  $subscription_items['stripe_product'] = 'song';
                  $subscription_items['stripe_price'] = $charges->amount;
                  $subscription_items['quantity'] = 1;
                  $subscription_items->save();

                  $tbl_subscriptions = new tbl_subscription;
                  $tbl_subscriptions['user_id'] = $user_id;
                  $tbl_subscriptions['plan_id'] = $user_plan_id;
                  $tbl_subscriptions['stripe_customer_id'] = null;
                  $tbl_subscriptions['stripe_subscription_id'] = $subscription->id;
                  $tbl_subscriptions['stripe_plan_start'] =$subscription->trial_ends_at;
                  $tbl_subscriptions['stripe_plan_end'] = $subscription->ends_at;
                  $tbl_subscriptions->save();
                  
                  $users = User::where('id',$user_id)->update([
                        'type' => 1 ,
                        'is_premium'=>1,
                        'plan'=>$user_plan_id,
                        'zip'=>$charges->source->address_zip,
                        'stripe_subscription_id'=>$subscription->id,
                        'stripe_subscription_status'=>1,
                        'stripe_start_date'=>$subscription->trial_ends_at,
                        'stripe_end_date'=>$subscription->ends_at,
                        'stripe_id'=>$charges->id,
                        'trial_ends_at'=>$subscription->trial_ends_at,
                        'subscription_ends_at'=> $subscription->ends_at,
                  ]);

                  $subscription_data = [
                    'title' => 'Subscriptions',
                    'body' => 'congratulations for Subscriptions'."  ".$email,
                    'body_1'=>'Once again, Thank you for using our application!',
                   ];
                
                Mail::to($email)->send(new SubscriptionMail($subscription_data));
                  $user_latest = User::where('id',$user_id)->first();
                  return response()->Json([
                    'status'=>200,
                    'data'=> $user_latest,
                    'message'=>'congratulation your Payment is Successfully',
                  ]);
                }
          }catch (\CardException $e) {
          return response()->json([
              'status'=> 500,
              'message' =>"Your card's security code is incorrect.",
          ]);
      }
    }
}
