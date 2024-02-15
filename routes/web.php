<?php

use App\Http\Controllers\PraktikanController;
use App\Models\Aslab;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/** Routes TES NON MIDDLEWARE
 * Disini Kalian bisa melakukan tes render HTML yang sudah dibuat
 * NOTE!! Jangan mengubah kode di Controller, karena adlh Bagian BE ^-^
 * Gunakan Callback Function di Route ini dan DB::Table('table_apa') atau Eloquent saja jika ingin testing data query
 */
Route::get('/test', function (){
    return Inertia::render('Test');
});

//Buat Kalian tes sesuatu yang memerlukan backend testing, Gunakan Callback Function seperti ini
Route::get('/tests', function (){
    //<--------Kalau kalian perlu yang lebih kompleks-------->//
    $aslab = \Illuminate\Support\Facades\DB::table('aslab')
        ->where('nama', '=','Gusion Cibaduyut')
        ->value('id');
    $praktikan = \App\Models\Praktikan::where('aslab_id',$aslab)->get();
    //<------------------------------------------------------>//
    return Inertia::render('Test', [
        'props' => [
            'listAslab' => Aslab::all(), //INI AKAN memberikan kalian variabel props.listAslab yang berisi data seluruh Aslab
            'satuPraktikan' => $praktikan
        ]
    ]);
});


/** Routes Page Login
 * Khusus untuk admin, routenya adalah /shadow untuk alasan keamanan
 * Semua Page Login tidak akan bisa diakses jika sudah terautentikasi / login,
 * User yang sudah terautentikasi akan diarahkan ke route /dashboard
 */
Route::middleware('guest')->group(function (){
    Route::get('/shadow', function (){
        return Inertia::render('LoginAdmin');
    });
    Route::get('/login-aslab', function (){
        return Inertia::render('LoginAslab');
    })->name('aslab.login');
    Route::get('/login', function (){
        return Inertia::render('PraktikanLoginPage');
    })->name('praktikan.login');
});

/** Routes Page TESTING Autentikasi
 * Route yang sudah disetel middleware autentikasinya
 */
Route::middleware('auth:admin')->get('/tes-admin', function (){
    return Inertia::render('Test');
});
Route::middleware('auth:aslab')->get('/tes-aslab', function (){
    return Inertia::render('Test');
});
Route::middleware('auth:praktikan')->prefix('praktikan')->group(function () {
    Route::get('dashboard', [PraktikanController::class, 'dashboardPage']);
    Route::get('praktikum', [PraktikanController::class, 'praktikumPage']);
});
