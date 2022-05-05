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
        try {
            $amounts = 100*100;
            $token   = $request->id;
            // return $token;
            // return $request->all();
            $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET_KEY'));
            // return $stripe;
            \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
                $charges = \Stripe\Charge::create([
                'amount' => 2000,
                'currency' => 'usd',
                'description' => 'Customer Payment',
                'source' => $token,
                ]);
          } catch(Stripe_CardError $e) {
            // Since it's a decline, Stripe_CardError will be caught
            $body = $e->getJsonBody();
            $err  = $body['error'];
          
            print('Status is:' . $e->getHttpStatus() . "\n");
            print('Type is:' . $err['type'] . "\n");
            print('Code is:' . $err['code'] . "\n");
            // param is '' in this case
            print('Param is:' . $err['param'] . "\n");
            print('Message is:' . $err['message'] . "\n");
          } catch (Stripe_InvalidRequestError $e) {
            // Invalid parameters were supplied to Stripe's API
          } catch (Stripe_AuthenticationError $e) {
            // Authentication with Stripe's API failed
            // (maybe you changed API keys recently)
          } catch (Stripe_ApiConnectionError $e) {
            // Network communication with Stripe failed
          } catch (Stripe_Error $e) {
            // Display a very generic error to the user, and maybe send
            // yourself an email
          } catch (Exception $e) {
            // Something else happened, completely unrelated to Stripe
          }
    }
}
