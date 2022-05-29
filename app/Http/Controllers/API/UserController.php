<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Plan;
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
use App\Http\Resources\Api\UserDataResource;
use App\Notifications\ForgotPasswordMail;
use App\Http\Requests\Api\ForgotPasswordMailRequest;
use App\Mail\ResendVerificationMail;
// use Illuminate\Support\Facades\Mail;
use App\Jobs\RegistrationsendNotification;

class UserController extends Controller
{
        public function welcome()
        {
            return view('welcome');
        }
    
    public function Register(RegisterRequest $request) 
    { 
        try {
            $result = User::create($request->authorize());
            $success['token'] = $result->createToken('Personal Access Token')->accessToken;
            $success['data'] = $result;
            $Success['activation_token'] = $result['activation_token'];
            // $result->notify(new RegisterVerificationMail());
            RegistrationsendNotification::dispatch($result);
            // ->delay(now()->addMinutes(5));
            return response()->json([
                'status'=> $this->successCode,
                'message'=>$this->responseMsg['success'][3],
                'data' => $Success,
            ]);
            } catch (\Exception $e) {
              return $this->getExceptionResponse($e);
            }
    }     

    public function resend_Mail(Request $request)
    {
      try{
        $email = $request->Email;
        $resend =User::where('email',$email)->first();
        if($resend) {
        $email = $resend->email;
        $activation_token = $resend->activation_token;
        $url = url('/') . '/api/user/' . $activation_token;
        $details = [
          'title' => 'Varify your Account',
          'body' => 'Thank you for registering with us.'. $email,
          'url' =>$url,
          'body_1'=>'Once again, Thank you for using our application!'
      ];
      
      Mail::to($email)->send(new ResendVerificationMail($details));
           return response()->json([
            'status'=> $this->successCode,
            'message'=>$this->responseMsg['success'][4],
           ]);
      } else {
        return $this->recordNotFound();   
      }

      }
      catch (\Exception $e) {
        return $this->getExceptionResponse($e);
      }
    }
public function User_login(Request $request)
{
  try {
    $validator = \Validator::make($request->all(), [
      'email' => 'required|email|max:50|exists:users',
      'password' => 'required|min:5|max:50'
    ]);
  $credentials = $request->only('email', 'password');

  if ($validator->fails()) {
    return $this->recordNotFoundEmail();
  }
  if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
        $user = Auth::User();
        if($user->is_status == 1)
        {
         $success['token'] = $user->createToken('LoginToken')->accessToken;
         $success['data'] = $credentials;
         return response()->json([
             'user'      => Auth::user(),
             'message'   => $this->responseMsg['success'][5],
             'status'    => $this->successCode,
             'token'     => $success,
             'admin'     => $user->role_id ,
             'name'      => $user->role->name,
           ]);
         }
         else {
          return response()->json([
            'user'      => Auth::user(),
            'message'   =>$this->responseMsg['error'][6],
            'status'    => $this->validationCode,
          ]);
         }
        }
        else 
        {
          return $this->enterValidPassword();
        }
       
      }
      catch (\Exception $e) {
        return $this->getExceptionResponse();
     }
    }
    

    Public function Logout()
    {
      if (Auth::check()) 
      {
        Auth::User()->AauthAcessToken()->delete();
        return response()->json(array(
        'success' =>$this->responseMsg['success'][6],
        'status' => $this->successCode,
        ));
      }
      else{
        return ['not logout'];
      }
    }

    public function User(Request $request)
    {
      // $user = Auth::user;
      $user = User::Search($request)->paginate(10);
      return response()->json(array(
        'Status' => $this->successCode,
        'data' => $user,
      ));
    }

    public function Get()
    {
      $user = User::all();
      return response()->json(array(
        'Status' => $this->successCode,
        'data' => $user,
      ));
    }

    
    public function GetUser(Request $request,$id)
    {
      try
      {
        $data = User::findOrFail($id);
      return response()->json([
        'status' => $this->successCode,
        'data'=>$data,
      ]);
     }
     catch (\Exception $e) {
      return $this->getExceptionResponse($e);
    }
  }

    public function DeleteUser($id)
    {
      try{
      $user = User::findOrFail($id);
      $user->delete();
      return response()->json([
        'Message'=>$this->responseMsg['success'][7],
        'status' => $this->successCode,
      ]);
    }
    catch (\Exception $e) {
      return $this->getExceptionResponse($e);
    }
    }

    public function AddUser(Request $request)
    {
      try{
        $add_user['name']=$request->input('firstName');
        $add_user['fullname']=$request->input('lastName');
        $add_user['email']=$request->input('email');
        $add_user['password']=Hash::make($request->input('password'));
        $user = User::create($add_user);
        return response()->json([
          'message'=>$this->responseMsg['success'][0],
          'status'=>$this->successCode,
          'data'=>$user,
        ]);
      }
      catch (\Exception $e) {
        return $this->getExceptionResponse($e);
      }
    }
    public function UpdateUser($id)
    {
      try {
        $update = User::find($id);
      return response()->json([
        'status'=>$this->successCode,
        'data'=>$update,
      ]);
    }
    catch (\Exception $e) {
      return $this->getExceptionResponse($e);
    }
  }

  public function activate_token($token)
  {
    try {
    $isUserActive = User::where('activation_token', $token)->first();
    if ($isUserActive) {
      $id = $isUserActive->id;
      $current_date_time = Carbon::now()->toDateTimeString();
      $updateStatus = User::find($id);
      $updateStatus->update(['is_status' => 1 , 'email_verified_at'=> $current_date_time]);
      return redirect()->to('login');
    };
  }
   catch (\Exception $e) {
   return $this->getExceptionResponse($e);
   }
     }
  public function forgetPassword(ForgotPasswordMailRequest $request)
  {
    try {
        $email = $request->Email;
        if($email){
          $slug = Str::random(64);
          $createSlug = User::where('email', $email)->update([
              'slug' => $slug,
              'slug_created_at' => Carbon::now()
          ]);
          $updatedSlug = User::where('email',$email)->first();
          $updatedSlug->notify(new ForgotPasswordMail());
          $slug1 =$updatedSlug->slug;
          return response()->json([
            'status'=> $this->successCode,
            'message'=>$this->responseMsg['success'][8],
            'slug'=> $slug1,
        ]);
      }
  }
  catch (\Exception $e) {
    return $this->getExceptionResponse($e);
  }
}

public function resetPassword(Request $request){
  try{
      $Password = $request->Password;
      $ConfirmPassword =$request->ConfirmPassword;
      $slug =$request->slug;
      $user = User::where('slug', $slug)->first();
      if($Password == $ConfirmPassword){
          $changePassword = User::where('slug', $slug)->update([
              'password' =>  bcrypt($Password)
          ]);
          return $this->recordUpdate();
      }
      else{
          return $this->passwordException();
      }

  }
  catch (\Exception $e) {
    return $this->getExceptionResponse($e);
  }
}
  public function editUser(Request $request)
  {
    try{
    $id = $request->id;
    $name=$request->FirstName;
    $fullname = $request->LastName;
    $artistname =$request->ArtistName;
    $email =$request->Email;
    $password =  Hash::make($request->Password);
    $edit = User::where('id',$id)->update([
      'name'=>$name,
      'fullname'=>$fullname,
      'artistname'=>$artistname,
      'email'=>$email,
      'password'=>$password,
      'is_status'=>1,
    ]);
    return $this->recordUpdate();
  }
catch (\Exception $e) {
  return $this->getExceptionResponse($e);
}
}

  public function Query(Request $request)
  {
     $search = User::Search($request->data)->get();
     return response()->json([
      'status'=> $this->successCode,
      'data'=> $search,
      ]);

  }
}

