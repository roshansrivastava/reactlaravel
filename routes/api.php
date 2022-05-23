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
Route::get('/user/{token}',[UserController::class,'activate_token']);
Route::post('/forget/password',[UserController::class,'forgetPassword']);
Route::post('/reset/pasword',[UserController::class,'resetPassword']);
Route::post('/resend',[UserController::class,'resend_Mail']);


// Dashvboard //
Route::group(['middleware' => 'auth:api'], function()
{
    Route::get('get-file/{id}',[FileUploadController::class,'getFile']);
    Route::get('/plan',[DashboardController::class,'planUser']);
    Route::get('/getuser',[UserController::class,'Get']);
    Route::post('/search',[UserController::class,'Query']);
    Route::post('logout',[UserController::class,'Logout']);
    Route::post('upload-file',[FileUploadController::class,'uploads']);
    Route::post('/users',[UserController::class,'User']);
    Route::get('/delete/{id}',[UserController::class,'DeleteUser']);
    Route::post('/adduser',[UserController::class,'AddUser']);
    Route::get('/dashboard/updateuser/{id}',[UserController::class,'UpdateUser']);
    Route::post('/updateuser',[UserController::class,'UpdateUser']);
    Route::get('/getuser/{id}',[UserController::class,'GetUser']);
    Route::post('/edit/user',[UserController::class,'editUser']);
    Route::get('/stores',[DashboardController::class,'Store']);
    Route::get('/genres',[DashboardController::class,'Genre']);
    Route::post('/release/albums',[DashboardController::class,'Albums']);
    Route::get('/country',[DashboardController::class,'Country']);
    Route::get('stripe', [StripeController::class, 'stripe']);
    Route::post('stripe', [StripeController::class, 'stripePost']);
    Route::get('/released/music/album',[DashboardController::class,'album_Music']);
    Route::post('/released/music',[DashboardController::class,'releasedMusic']);
    
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});




