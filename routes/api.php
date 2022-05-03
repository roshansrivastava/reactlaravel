<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\FileUpload;
use App\Models\Plan;
use App\Http\Controllers\API\FileUploadController;
use App\Http\Controllers\API\UserContoller;
use App\Http\Controllers\API\DashboardController;

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

Route::post('logout',[UserContoller::class,'Logout'])->middleware(['auth:api']);
Route::post('/users',[UserContoller::class,'User'])->middleware(['auth:api']);
Route::get('/delete/{id}',[UserContoller::class,'DeleteUser'])->middleware(['auth:api']);
Route::post('/adduser',[UserContoller::class,'AddUser'])->middleware(['auth:api']);
Route::get('/dashboard/updateuser/{id}',[UserContoller::class,'UpdateUser']);
Route::post('/updateuser',[UserContoller::class,'UpdateUser'])->middleware(['auth:api']);
Route::get('/getuser/{id}',[UserContoller::class,'GetUser'])->middleware(['auth:api']);
Route::post('/edit/user',[UserContoller::class,'editUser'])->middleware(['auth:api']);
//Route::post('/search',[UserContoller::class,'Search'])->middleware(['auth:api']);

Route::get('/user/{token}',[UserContoller::class,'activate_token']);
Route::post('/forget/password',[UserContoller::class,'forgetPassword']);
Route::post('/reset/pasword',[UserContoller::class,'resetPassword']);
Route::get('/plan',[DashboardController::class,'planUser']);
Route::get('/getuser',[UserContoller::class,'Get']);
Route::post('/search',[UserContoller::class,'Query']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});




