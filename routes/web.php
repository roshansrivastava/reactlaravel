<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\FileUploadController;
use App\Models\User;
use App\Models\Plan;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\StripeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// Route::get('/phinfo', function () {
//     return phpinfo();
// });

Route::get('/',[UserController::class,'welcome']);
Route::post('/',[UserController::class,'Register']);
Route::get('/login',[UserController::class,'welcome']);
Route::post('/login',[UserController::class,'User_login']);
Route::get('/dashboard',[UserController::class,'welcome']);
Route::get('/dashboard/home',[UserController::class,'welcome']);
Route::get('/navbar',[UserController::class,'welcome']);
Route::get('/sidebar',[UserController::class,'welcome']);
Route::get('/dashboard/User',[UserController::class,'welcome']);
Route::get('/dashboard/adduser',[UserController::class,'welcome']);
Route::get('/dashboard/updateuser/{id}',[UserController::class,'welcome']);
Route::get('/dashboard/release/newalbum',[UserController::class,'welcome']);
Route::get('/dashboard/Music',[UserController::class,'welcome']);
Route::get('/dashboard/purchase/premium',[UserController::class,'welcome']);
Route::get('/dashboard/purchase/basic',[UserController::class,'welcome']);
Route::get('/dashboard/purchase/free',[UserController::class,'welcome']);
Route::get('/user/{token}',[UserController::class,'welcome']);
Route::get('/re',[UserController::class,'welcome']);
Route::get('/forget/password',[UserController::class,'welcome']);
Route::get('/reset/password/{token}',[UserController::class,'welcome']);
Route::post('/reset/password',[UserController::class, 'resetPassword']);
Route::get('plan',[DashboardController::class,'planUser']);
Route::get('addinguser',[UserController::class,'welcome']);
Route::get('/resend',[UserController::class,'welcome']);
Route::post('/resend',[UserController::class,'resend_Mail']);
Route::get('/table',[UserController::class,'welcome']);
Route::post('upload-file',[FileUploadController::class,'uploads']);
Route::get('stripe', [StripeController::class, 'stripe']);
Route::post('/stripe/premium', [StripeController::class, 'stripePost']);
Route::post('/released/music',[DashboardController::class,'releasedMusic']);
Route::get('/dashboard/released/album/1',[DashboardController::class,'welcome']);


Route::get('/users', function (Request $request) {
    // $users = User::paginate(10);
    return $users;
});