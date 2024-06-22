<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\VoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('users', UserController::class);
Route::resource('vote', VoteController::class);
Route::get('/winner', [VoteController::class, 'getWinner']);

Route::resource('login', AuthController::class);

