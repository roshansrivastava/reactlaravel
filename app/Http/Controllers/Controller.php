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

    public $responseMsg    =   [

        'success'   =>  [
            'Record saved successfully.',
            'Record updated successfully.',
            'Record remove successfully.'
        ],
        'error' =>  [
        'Sorry! Record not found',
        'Oops! something went wrong.',
        'Sorry! Record already exist.',
        'Sorry! File not found in folder.',
        'Sorry! Email not found',
        
        ],
        'validation'=>[
        'Unauthorized user',
        'Sorry! invalid user',
        'Sorry! your account is deactivated.'
        ]
    ];
    public $notifiType    =   [
        'likeService'         => 1,
        'likePost'            => 2,
        'likeUser'            => 3,
        'userFollow'          => 4,
        'commentOnPost'       => 5,
        'buyService'          => 6,
        'classesReminder'     => 7,
        'createPost'          => 8,
        'completedService'    => 9,
        'subscriptionExpired' => 10,
        'sendMessage'         => 11,
        // 'checkUserOnline'     => 12,
        'checkUserDeactivate' => 13,
        'checkPaymentStatus'  => 14,
    ];


    public function getExceptionResponse($e){
        return response()->json([
            'message'   => $e->getMessage(),
            'status'    => $e->getCode(),
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
    public function filterRequestData($data){
        $returnData = array();
        $returnData['showPage']   = isset($data->limit) ? $data->limit : 20;
        $returnData['SortBy']     = isset($data->sorting['by']) ? $data->sorting['by'] : 'id';
        $returnData['SortOrder']  = isset($data->sorting['order']) ? $data->sorting['order'] : 'DESC';
        return $returnData;
    }

    public function returnDynamicLimit($data){
        return isset($data->limit) ? $data->limit : 10;
    }


}
