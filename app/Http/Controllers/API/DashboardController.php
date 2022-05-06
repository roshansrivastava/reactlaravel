<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plan;

class DashboardController extends Controller
{
    public function planUser()
    {
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
    }

   
}
