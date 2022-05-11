<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plan;
use App\Models\Genre;
use App\Models\Store;

class DashboardController extends Controller
{
    public function planUser()
    {
        try{
        $plan = Plan::all();
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
        return response()->json([
            'status'=>200,
            'plan'=>$plan,
        ]);
        }catch (\Exception $e) {
                return response()->json([
                'status'=> 500,
                'message' =>'Please enter valid mail',
            ]);
        }

    }

    public function Store()
    {
        try{
        $store = Store::all();
        return response()->Json([
            'status'=>200,
            'store'=>$store
        ]);
        }catch(\Exception $e){
            return response()->Json([
                'status'=>500,
                'Messages'=>'Something Went Wrong',
            ]);
        }
    }

   public function Genre()
    {
        try{
        $genre = Genre::all();
        return response()->Json([
            'status'=>200,
            'genre'=>$genre
        ]);
        }catch(\Exception $e){
            return response()->Json([
                'status'=>500,
                'Messages'=>'Something Went Wrong',
            ]);
        }
    }
}
