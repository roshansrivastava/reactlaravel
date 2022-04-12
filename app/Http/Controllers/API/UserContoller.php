<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;



class UserContoller extends Controller
{
    
    public function Register(Request $request) 
    { 
        try {
        $this->validate($request, [
            'name' => 'required|min:3|max:50',
            'email' => 'email',
            'password' => 'min:4|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:4'
            ]);
            $user['name'] = $request->input('name');
            $user['email'] = $request->input('email');
            $user['password']=  Hash::make($request->input('password'));
            $result = User::create($user);
            $success['token'] = $result->createToken('Personal Access Token')->accessToken;
            $success['data'] = $result;
        return response()->json([
            'status'=> 200,
            'message'=> 'User Successfully Register ' ,
            'data' => $success,
        ]);
    }
    catch (\Exception $e) {
        return response()->json([
            'status'=> false,
            'message' =>$e->getMessage(),
        ]);
    }
}


public function User_login(Request $request)
{
  $credentials = $request->only('email', 'password');
  $validator = \Validator::make($request->all(), [
    'email' => 'required|email',
    'password' => 'required|min:5'
  ]);
  if ($validator->fails()) {
    return response()->json(array(
      'status' => 0,
      'errors' => $validator->getMessageBag()->toArray()
    ), 400);
  }else if(Auth::attempt($credentials)){
        $user = Auth::User();
        if ($user->status == '0') {
          return response()->json([
            'message'   => 'please registeration your account',
            'status'    => 'Error',
          ],403);
        }
         else { 
          //\Auth::login($user);
          $success['token'] = $user->createToken('LoginToken')->accessToken;
          $success['data'] = $credentials;
          return response()->json([
               'message'   => Auth::user(),
               'status'    => 200,
               'token'     => $success,
               'admin'     => $user->role_id ,
               'name'      => $user->role->name,
            ]);
        }
      }
      else{
        return response()->json([
          'message'   => 'Please fill correct password',
          'status'    => 'Error',
        ],401);
      }
    }
    
    public function welcome()
    {
        return view('welcome');
    }

    Public function Logout()
    {
      //return [Auth::user()];
      if (Auth::check()) 
      {
        Auth::User()->AauthAcessToken()->delete();
        return response()->json(array(
        'success' => 'you are logged out',
        'status' => 200,
        ));
      }
      else{
        return ['not logout'];
      }
    }
}


