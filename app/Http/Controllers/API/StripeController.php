<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;
use Stripe;

class StripeController extends Controller
{
    public function stripePost(Request $request)
    {
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        Stripe\Charge::create ([
                "amount" => 100 * 100,
                "currency" => "usd",
                "source" => $request->stripeToken,
                "description" => "This payment is tested purpose from codecheef.org"
        ]);
   
        Session::flash('success', 'Payment successful!');
           
        return back();
    }
}
