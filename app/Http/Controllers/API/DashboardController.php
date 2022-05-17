<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plan;
use App\Models\Genre;
use App\Models\Store;
use App\Models\Country;

class DashboardController extends Controller
{
    public function planUser()
    {
        try{
            // // $plam
            // for ($plan = 0; $plan < max(3); $plan++) {
                //     return['2',$plan];
        // }
        // // $description = $plan[0]['content_1'];
        // // $description = $plan[0]['content_2'];
        // // $description = $plan[0]['content_3'];
        // // $description = $plan[0]['content_4'];
        // // $description = $plan[0]['content_5'];
        // // return $description;
        
        $plan = Plan::all();
        return response()->json([
            'status'=>$this->successCode,
            'plan'=>$plan,
        ]);
        }catch (\Exception $e) {
                return $this->getExceptionResponse($e);
        }

    }

    public function Store()
    {
        try{
        $store = Store::all();
        return response()->Json([
            'status'=>$this->successCode,
            'store'=>$store
        ]);
        }catch(\Exception $e){
            return $this->getExceptionResponse($e);
        }
    }

   public function Genre()
    {
        try{
        $genre = Genre::all();
        return response()->Json([
            'status'=>$this->successCode,
            'genre'=>$genre
        ]);
        }catch(\Exception $e){
            return $this->getExceptionResponse($e);
        }
    }
    public function Country()
    {
        try{
            $country = Country::all();
            return response()->Json([
                'status'=>$this->successCode,
                'country'=>$country
            ]);
        }catch(\Exception $e){
        return $this->getExceptionResponse($e);
        }
    }
}
