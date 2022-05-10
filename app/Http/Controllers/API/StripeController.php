<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;
use Stripe;
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
class StripeController extends Controller
{
  public function __construct()
    {
        return $this->middleware('auth:api');
    }
    public function stripePost(Request $request)
    { 
      
      // return  $request->user_name;
  // $currentDateTime = Carbon::now('Asia/Calcutta')->format('Y-m-d H:i:s');
  // return ['g',$currentDateTime];
  // $subscriptionTypes = $request->get_subscription_days;
  // $checkexistingSubsription = Subscription_Course_Purchase::where('user_id', $user_id)->where('upgrade', 0)->orderBy('id', 'desc')->first();
  // if($checkexistingSubsription){
  // $datecheck = $checkexistingSubsription->subs_end_date;
  // $today = Carbon::now('Asia/Calcutta')->format('Y-m-d H:i:s');
  // if (Carbon::parse($today)->lte(Carbon::parse($datecheck))) {
  // $upgradeSubsription = Subscription_Course_Purchase::where('id', $checkexistingSubsription->id)->update(['upgrade' => 1]);
  // }
  // }
  // dd($subscriptionTypes);
  // if ($request->get_subscription_days == 'monthly') {
  // $newDateTime = Carbon::now('Asia/Calcutta')->addMonth()->format('Y-m-d H:i:s');
  // } elseif ($request->get_subscription_days == 'quarterly') {
  // $newDateTime = Carbon::now('Asia/Calcutta')->addQuarter()->format('Y-m-d H:i:s');
  // } else {
  // $newDateTime = Carbon::now('Asia/Calcutta')->addYears()->format('Y-m-d H:i:s');
  // }
  // if ($subscriptioninsertdata) {
  // \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
  // $charges = \Stripe\Charge::create([
  // 'amount' => $amounts,
  // 'currency' => 'usd',
  // 'description' => 'Customer Payment',
  // 'source' => $token,
  // ]);
  // if($charges){
  // $subscriptioninsertdata = Subscription_Course_Purchase::create([
  // 'user_id' => $user_id,
  // 'subs_start_date' => $currentDateTime,
  // 'subs_end_date' => $newDateTime,
  // 'subscription_type' => $subscriptionTypes,
  // ]);
  // $result = PaymentHistory::create([
  // 'user_id' => $user_id,
  // 'single_course_purchase_entry_id' => null,
  // 'transaction_id' => $charges->balance_transaction,
  // 'description' => $charges->description,
  // 'amount' => $amounts,
  // 'payout_status' => "2",
  // 'subscription_purchase_entry_id' => $subscriptioninsertdata->id
  // ]);
  // if($result){
  // $subscriptiondata = Subscription_Course_Purchase::where('user_id', $user_id)->orderBy('id', 'desc')->first();
  // $singlecoursedata = Single_Course_Purchase::where('user_id', $user_id)->orderBy('id', 'desc')->pluck('course_id','id');
  // if ($subscriptiondata) {
  // $datecheck = $subscriptiondata->subs_end_date;
  // $nextdate = Carbon::now('Asia/Calcutta')->format('Y-m-d H:i:s');
  // if (Carbon::parse($nextdate)->lte(Carbon::parse($datecheck))) {
  // $getcourseslist = Course::select('id')->search($request)->where('educo_bundle', 1);
  // $courseIds = $getcourseslist->pluck('id');
  // $getcourseslist = $getcourseslist->get()->toArray();
  // }
  // }
  // if ($singlecoursedata) {
  // $getcourses = Course::select('id')->search($request)->whereIn('id', $singlecoursedata)->whereNotIn('id', $courseIds)->get()->toArray();
  // }
  // $results = array_merge($getcourseslist,$getcourses);
  // $data = InsertSingleAndSubscriptionPurchaseCourseJob::dispatch(['user_id' => $user_id, 'coursesIds' => $results ]);
  // return response()->json([
  // 'message' => 'Payment has sent successfully!!!',
  // 'status' => true,
  // ]);
  // } else {
  // return response()->json([
  // 'status' => false
  // ]);
  // }
  // }
  // } else {
  // return response()->json([
  // 'status' => false
  // ]);
  // }


        try {
            $amounts = 50*100;
            $token   = $request->tokenization['id'];
            // return $token;
            $user_id = $request->user_id;
            $user_name = $request->user_name;
            $plan = 'premium';
            $user_discount = '0';
            // return $token;
            // return $request->all();
            $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET_KEY'));
            // return $stripe;
            \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
          //   $checkout = Customer::create([
          //     'email'       => auth()->user()->email,
          //     'name'        => auth()->user()->name,
          //     'description' => 'Singo test customer for test',
          //     'metadata'    => [
          //         'user_id' => auth()->user()->id,
          //     ],
          // ]);
                $charges = \Stripe\Charge::create([
                'amount' =>  $amounts ,
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
                  
                  // $uid = auth()->user()->id;
                  // $user_info = User::findOrFail($uid);
                  // Mail::to($user_info->email)->queue(new PremiumPurchase_Success($user_info));
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
                  $tbl_subscriptions['plan_id'] = 2;
                  $tbl_subscriptions['stripe_customer_id'] = null;
                  $tbl_subscriptions['stripe_subscription_id'] = $subscription->id;
                  $tbl_subscriptions['stripe_plan_start'] =$subscription->trial_ends_at;
                  $tbl_subscriptions['stripe_plan_end'] = $subscription->ends_at;
                  $tbl_subscriptions->save();
                  
                  $users = User::where('id',$user_id)->update([
                        'type' => 1 ,
                        'is_premium'=>1,
                        'plan'=>2,
                        'zip'=>$charges->source->address_zip,
                        'stripe_subscription_id'=>$subscription->id,
                        'stripe_subscription_status'=>1,
                        'stripe_start_date'=>$subscription->trial_ends_at,
                        'stripe_end_date'=>$subscription->ends_at,
                        'stripe_id'=>$charges->id,
                        'trial_ends_at'=>$subscription->trial_ends_at,
                        'subscription_ends_at'=> $subscription->ends_at,
                  ]);


                  return response()->Json([
                    'data'=>$charges,
                  ]);
                }
                return view('payments.success');
          }

        catch (CardException $e) {
            $error = "Your card's security code is incorrect.";
        } catch (Exception $e) {
            $error = "Sorry, we weren't able to authorize your card. You have not been charged.";
        }

        return view('payments.cancel');
    }
}
