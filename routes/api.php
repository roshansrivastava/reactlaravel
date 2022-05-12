<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\FileUpload;
use App\Models\Plan;
use App\Http\Controllers\API\FileUploadController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\StripeController;

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
Route::post('register',[UserController::class,'Register']);
Route::post('login',[UserController::class,'User_login']);
Route::get('get-file/{id}',[FileUploadController::class,'getFile']);
// Route::post('login',[AccessTokenController::class,'issueToken'])->middleware(['api-login','throttle']);

Route::post('logout',[UserController::class,'Logout'])->middleware(['auth:api']);
Route::post('upload-file',[FileUploadController::class,'uploads'])->middleware(['auth:api']);
Route::post('/users',[UserController::class,'User'])->middleware(['auth:api']);
Route::get('/delete/{id}',[UserController::class,'DeleteUser'])->middleware(['auth:api']);
Route::post('/adduser',[UserController::class,'AddUser'])->middleware(['auth:api']);
Route::get('/dashboard/updateuser/{id}',[UserController::class,'UpdateUser'])->middleware(['auth:api']);
Route::post('/updateuser',[UserController::class,'UpdateUser'])->middleware(['auth:api']);
Route::get('/getuser/{id}',[UserController::class,'GetUser'])->middleware(['auth:api']);
Route::post('/edit/user',[UserController::class,'editUser'])->middleware(['auth:api']);
Route::get('/stores',[DashboardController::class,'Store'])->middleware(['auth:api']);
Route::get('/genres',[DashboardController::class,'Genre'])->middleware(['auth:api']);

Route::get('/user/{token}',[UserController::class,'activate_token']);
Route::post('/forget/password',[UserController::class,'forgetPassword']);
Route::post('/reset/pasword',[UserController::class,'resetPassword']);
Route::get('/plan',[DashboardController::class,'planUser']);
Route::get('/getuser',[UserController::class,'Get']);
Route::post('/search',[UserController::class,'Query']);

Route::get('stripe', [StripeController::class, 'stripe']);
Route::post('stripe', [StripeController::class, 'stripePost']);
Route::post('/resend',[UserController::class,'resend_Mail']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});




