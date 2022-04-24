<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Notifications\Notifiable;
use Notification;
use Str;
use Illuminate\Support\Facades\Hash;
use App\Notifications\RegisterVerificationMail;
use App\Http\Requests\Api\RegisterRequest;
use Mail;
use Carbon\Carbon;
use App\Notifications\ForgotPasswordMail;
use App\Http\Requests\Api\ForgotPasswordMailRequest;


class UserContoller extends Controller
{
    
    public function Register(RegisterRequest $request) 
    { 
        try {
            $result = User::create($request->authorize());
            $success['token'] = $result->createToken('Personal Access Token')->accessToken;
            $success['data'] = $result;
            // if(count($success) > 0){
            $Success['activation_token'] = $result['activation_token'];
            $result->notify(new RegisterVerificationMail());
            return response()->json([
                'status'=> 200,
                'message'=>'User Successfully Register',
                'data' => $success,
            ]);
            } catch (\Exception $e) {
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
      'status' => 401,
      'errors' => $validator->getMessageBag()->toArray()
    ), 400);
  }
  else if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
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

    public function User()
    {
      // $user = Auth::user;
      $user = User::whereNotIn('role_id', [1,2])->get();
      return response()->json(array(
        'Success'=> 'Loging is Successfully',
        'Status' => 200,
        'data' => $user,
      ));
    }
    
    public function GetUser(Request $request,$id)
    {
      return['rjsdjh',$id];
      try
      {
        $data = User::findOrFail($id);
      return response()->json([
        'status' => 200,
        'data'=>$data,
      ]);
     }
    catch(\Exception $e)
    {
      return response()->json(array(
        'status'=> 0,
        'message'=>$e->getMessage(),
      ));
    }
  }

    public function DeleteUser($id)
    {
      try{
      $user = User::findOrFail($id);
      $user->delete();
      return response()->json([
        'Message'=> 'Delete is successfully',
        'status' => 200,
      ]);
    }
    catch (\Exception $e)
    {
      return response()->json([
        'status'=> false,
        'message'=>$e->getMessage(),
      ]);
      }
    }

    public function AddUser(Request $request)
    {
      try{
      // $this->validate($request,[
      //   'name' => 'required|min:3|max:50',
      //   'artistname'=>'required|min:5|max:20',
      //   'email' => 'email',
      //   'password' => 'required',
      //   ]);
        $add_user['name']=$request->input('firstName');
        $add_user['fullname']=$request->input('lastName');
        $add_user['email']=$request->input('email');
        $add_user['password']=Hash::make($request->input('password'));
        $user = User::create($add_user);
        return response()->json([
          'message'=>"User add successfully",
          'status'=>200,
          'data'=>$user,
        ]);
      }
      catch(\Exception $e)
      {
        return response()->json([
          'status'=>0,
          'message'=>$e->getMessage(),
        ]);
      }
    }
    public function UpdateUser($id)
    {
      try {
        $update = User::find($id);
      return response()->json([
        'status'=>200,
        'message'=>"Render edit is data ",
        'data'=>$update,
      ]);
    }
    catch (\Exception $e)
    {
      return response()->json([
        'status'=> 0,
        'message'=>$e-getMessage(),
      ]);
    }
  }

  public function activate_token($token)
  {
    $isUserActive = User::where('activation_token', $token)->first();
    if ($isUserActive) {
      $id = $isUserActive->id;
      $current_date_time = Carbon::now()->toDateTimeString();
      $updateStatus = User::find($id);
      $updateStatus->update(['is_status' => 1 , 'email_verified_at'=> $current_date_time]);
      return redirect()->to('login');
    };
  }

  public function forgetPassword(ForgotPasswordMailRequest $request)
  {
    try {
        $email = $request->Email;
        // return ['dfsjhsdfj',$email]; 
        if($email){
          $slug = Str::random(64);
          $createSlug = User::where('email', $email)->update([
              'slug' => $slug,
              'slug_created_at' => Carbon::now()
          ]);
          $updatedSlug = User::where('email',$email)->first();
          // $updatedSlug = array($updatedSlug);
          // $updatedSlug = json_decode($updatedSlug);
          // return $updatedSlug;
          $updatedSlug->notify(new ForgotPasswordMail());
          $slug1 =$updatedSlug->slug;
          return response()->json([
            'status'=> 200,
            'message'=>'User Successfully Register',
            'slug'=> $slug1,
        ]);
      }
  } catch (\Exception $e) {
      return response()->json([
          'message' => 'Something went wrong. Please try again',
          'status' => 'Error',
      ]);
  }
}

public function resetPassword(Request $request){
  try{
      $password = $request->password;
      $confirmPassword = $request->confirm_password;
      $email= $request->email;
      $user = User::where('slug', $request->slug)->where('email', $email)->first();
      if($password == $confirmPassword){
          $changePassword = User::where('email', $email)->update([
              'password' =>  bcrypt($request->password)
          ]);
          return response()->json([
              'message' => "Password changed successfully",
              'status' => 'success',
          ]);
      }
      else{
          return response()->json([
              'message' => "password does not match",
              'status' => 'fail',
          ]);
      }

  }
  catch (\Exception $e) {
      return response()->json([
          'message' => $e->getMessage(),
          'status' => 'Error',
      ]);
  }
}

}  


