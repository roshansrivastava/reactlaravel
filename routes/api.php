<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\FileUpload;
use App\Http\Controllers\API\FileUploadController;
use App\Http\Controllers\API\UserContoller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|   
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('register',[UserContoller::class,'Register']);
Route::post('login',[UserContoller::class,'User_login']);
Route::post('upload-file',[FileUploadController::class,'uploads']);
Route::get('get-file/{id}',[FileUploadController::class,'getFile']);
// Route::post('login',[AccessTokenController::class,'issueToken'])->middleware(['api-login','throttle']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
