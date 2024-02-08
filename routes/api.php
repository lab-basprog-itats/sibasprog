<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth/login-admin', [AuthController::class, 'authAdmin']);
Route::post('/auth/login-aslab', [AuthController::class, 'authAslab']);
Route::post('/auth/login', [AuthController::class, 'authPraktikan']);

Route::middleware('auth:admin,aslab,praktikan')->group(function () {
    Route::post('/auth/logout-admin', [AuthController::class, 'logoutAdmin'])->middleware('auth:admin');
    Route::post('/auth/logout-aslab', [AuthController::class, 'logoutAslab'])->middleware('auth:aslab');
    Route::post('/auth/logout', [AuthController::class, 'logoutPraktikan'])->middleware('auth:praktikan');

    /**
     * Route untuk Refresh Token.
     * Url yang diterima /auth/refresh/admin, /auth/refresh/aslab, /auth/refresh
     * Tidak perlu menyertakan segment setelah /refresh untuk route Refresh Token Praktikan
     */
    Route::post('/auth/refresh/{guard}', [AuthController::class, 'refresh']);
    Route::get('/auth/get-token/{guard}', [AuthController::class, 'getToken']);
});
