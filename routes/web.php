<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\FileUploadController;
use App\Models\User;
use App\Models\Plan;
use App\Http\Controllers\API\UserContoller;
use App\Http\Controllers\API\DashboardController;

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

Route::get('/',[UserContoller::class,'welcome']);
Route::post('/',[UserContoller::class,'Register']);
Route::get('/login',[UserContoller::class,'welcome']);
Route::post('/login',[UserContoller::class,'User_login']);
Route::get('/dashboard',[UserContoller::class,'welcome']);
Route::get('/dashboard/home',[UserContoller::class,'welcome']);
Route::get('/navbar',[UserContoller::class,'welcome']);
Route::get('/sidebar',[UserContoller::class,'welcome']);
Route::get('/dashboard/User',[UserContoller::class,'welcome']);
Route::get('/dashboard/adduser',[UserContoller::class,'welcome']);
Route::get('/dashboard/updateuser/{id}',[UserContoller::class,'welcome']);
// Route::post('/dashboard/updateuser',[UserContoller::class,'welcome']);
Route::get('/dashboard/purchase/premium',[UserContoller::class,'welcome']);
Route::get('/dashboard/purchase/basic',[UserContoller::class,'welcome']);
Route::get('/dashboard/purchase/free',[UserContoller::class,'welcome']);
Route::get('/user/{token}',[UserContoller::class,'welcome']);
Route::get('/re',[UserContoller::class,'welcome']);
Route::get('/forget/password',[UserContoller::class,'welcome']);
Route::get('/reset/password/{token}',[UserContoller::class,'welcome']);
Route::post('/reset/password',[UserController::class, 'resetPassword']);
Route::get('plan',[DashboardController::class,'planUser']);
Route::get('addinguser',[UserContoller::class,'welcome']);
// Route::get('/logout',[UserContoller::class,'User']);

Route::get('/users', function (Request $request) {
    $users = User::paginate(10);
    return $users;
});