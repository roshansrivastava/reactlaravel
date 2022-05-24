<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public $usersRoleId         = ['2','3'];
    public $trainerRoleId       = '2';
    public $clientRoleId        = '3';
    public $successCode         = 200;
    public $invalidPassword     = 400;
    public $validationCode      = 401;
    public $recodeNotFoundCode  = 404;
    public $somethingWrong      = 408;
    public $recodeExistCode     = 409;
    public $blockedUser         = 403;
    public $internalError       = 500;

    public $responseMsg    =   [

        'success'   =>  [
            'Record saved successfully.',
            'Record updated successfully.',
            'Record remove successfully.',
            'Please Verify Mail Registration Successfully.',
            'Great! Successfully send in your mail.',
            'User Loging Successfully',
            'you are logged out',
            'Delete is successfully',
            'Please check Reset link sent in your mail ',
            'congratulation your Payment is Successfully',
        ],
        'error' =>  [
        'Sorry! Record not found',
        'Oops! something went wrong.',
        'Sorry! Record already exist.',
        'Sorry! Please enter valid emali & password .',
        'Sorry! Email not found',
        'Please Enter valid password .',
        'Please Verify Mail.',
        "Your card's security code is incorrect.",
        
        ],
        'validation'=>[
        'Unauthorized user',
        'Sorry! invalid user',
        'Sorry! your account is deactivated.',
        'password does not match',
        ]
    ];

    public function passwordException() {
        return response()->json([
            'message'   => $this->responseMsg['validation'][3],
            'status'    => $this->invalidPassword,
        ]);
    }
    public function getExceptionResponse($e){
        return response()->json([
            'message'   => $e->getMessage(),
            'status'    => $e->getCode(),
        ]);
    }
    public function recordNotFoundEmail(){
        return response()->json([
            'message'   => $this->responseMsg['error'][3],
            'status'    => $this->recodeNotFoundCode,
        ]); 
    }

    public function enterValidPassword(){
        return response()->json([
            'message'   => $this->responseMsg['error'][5],
            'status'    => $this->invalidPassword,
        ]); 
    }
    public function recordNotFound(){
        return response()->json([
            'message'   => $this->responseMsg['error'][4],
            'status'    => $this->recodeNotFoundCode,
        ]); 
    }
    public function recordNotFoundResponse(){
        return response()->json([
            'message'   => $this->responseMsg['error'][0],
            'status'    => $this->recodeNotFoundCode,
        ]);
    }
    public function recordExistResponse(){
        return response()->json([
            'message'   => $this->responseMsg['error'][2],
            'status'    => $this->recodeExistCode,
        ]);
    }
    public function recordRemove(){
        return response()->json([
            'message'   => $this->responseMsg['success'][2],
            'status'    => $this->successCode,
        ]);
    }
    public function somethingWrong(){
        return response()->json([
            'message'   => $this->responseMsg['error'][1],
            'status'    => $this->somethingWrong,
        ]);
    }
    public function customResponse($msg,$status){
        return response()->json([
            'message'   => $msg,
            'status'    => $status,
        ]);
    }
    public function recordUpdate(){
        return response()->json([
            'message'   => $this->responseMsg['success'][1],
            'status'    => $this->successCode,
        ]);
    }


}
