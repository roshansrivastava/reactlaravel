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
        return response()->json([
            'status'=>200,
            'plan'=>$plan,
        ]);
  
    }
}
