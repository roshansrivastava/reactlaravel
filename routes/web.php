<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\FileUploadController;
use App\Models\User;
use App\Http\Controllers\API\UserContoller;

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
Route::get('/navbar',[UserContoller::class,'welcome']);
Route::get('/sidebar',[UserContoller::class,'welcome']);
Route::get('/dashboard/User',[UserContoller::class,'welcome']);
// Route::get('/logout',[UserContoller::class,'User']);