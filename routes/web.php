<?php

// use App\Http\Controllers\AdminController;
use App\Http\Controllers\AslabController;
// use App\Models\Admin;
use App\Models\Aslab;
use Illuminate\Routing\Router;
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
        return Inertia::render('DashboardAdmin');
    });
    Route::get('/login-admin', function (){
        return Inertia::render('LoginAdmin');
    })->name('admin.login');
    Route::get('/preview-dosen', function (){
        return Inertia::render('ManageDosenPreviewAdmin');
    });//->name('admin.manageDosen');
    Route::get('/register-dosen', function (){
        return Inertia::render('ManageDosenRegisterAdmin');
    });//->name('admin.manageDosen');
    Route::get('/preview-aslab', function (){
        return Inertia::render('ManageAslabPreviewAdmin');
    });//->name('admin.manageDosen');
    Route::get('/register-aslab', function (){
        return Inertia::render('ManageAslabRegisterAdmin');
    });//->name('admin.manageDosen');
    Route::get('/praktikum', function (){
        return Inertia::render('PraktikumAdmin');
    });//->name('admin.praktikum');
    Route::get('/sesi-praktikum', function (){
        return Inertia::render('SesiPraktikumAdmin');
    });//->name('admin.sesiPraktikum');
    Route::get('/periode-dosen', function (){
        return Inertia::render('PeriodeDosenAdmin');
    });//->name('admin.periodeDosen');
    Route::get('/periode-aslab', function (){
        return Inertia::render('PeriodeAslabAdmin');
    });//->name('admin.periodeAslab');
    Route::get('/preview-modul-dosen', function (){
        return Inertia::render('ModulDosenPreviewAdmin');
    });//->name('admin.modulDosen');
    Route::get('/register-modul-dosen', function (){
        return Inertia::render('ModulDosenRegisterAdmin');
    });//->name('admin.modulDosen');
    Route::get('/preview-modul-aslab', function (){
        return Inertia::render('ModulAslabPreviewAdmin');
    });//->name('admin.modulAslab');
    Route::get('/register-modul-aslab', function (){
        return Inertia::render('ModulAslabRegisterAdmin');
    });//->name('admin.modulAslab');
    Route::get('/penilaian-dosen', function (){
        return Inertia::render('PenilaianDosenAdmin');
    });//->name('admin.penilaianDosen');
    Route::get('/penilaian-aslab', function (){
        return Inertia::render('PenilaianAslabAdmin');
    });//->name('admin.penilaianAslab');
    Route::get('/preview-materi', function (){
        return Inertia::render('ManageMateriPreviewAdmin');
    });//->name('admin.manageMateri');
    Route::get('/register-materi', function (){
        return Inertia::render('ManageMateriRegisterAdmin');
    });//->name('admin.manageMateri');
    Route::get('/preview-pelanggaran', function (){
        return Inertia::render('ManagePelanggaranPreviewAdmin');
    });//->name('admin.pelanggaran');
    Route::get('/register-pelanggaran', function (){
        return Inertia::render('ManagePelanggaranRegisterAdmin');
    });//->name('admin.pelanggaran');
    Route::get('/list-praktikan', function (){
        return Inertia::render('ListPraktikanAdmin');
    });//->name('admin.daftarPraktikan');

    // Route::get('/manage-dosen', function (){
    //     return Inertia::render('manageDosen');
    // })->name('admin.manageDosen');
    // Route::get('/manageAslab', function (){
    //     return Inertia::render('manageAslab');
    // })->name('admin.manageAslab');
    // Route::get('/praktikum', function (){
    //     return Inertia::render('praktikum');
    // })->name('admin.praktikum');
    // Route::get('/sesiPraktikum', function (){
    //     return Inertia::render('sesiPraktikum');
    // })->name('admin.sesiPraktikum');
    // Route::get('/periodeDosen', function (){
    //     return Inertia::render('periodeDosen');
    // })->name('admin.periodeDosen');
    // Route::get('/periodeAslab', function (){
    //     return Inertia::render('periodeAslab');
    // })->name('admin.periodeAslab');
    // Route::get('/modulDosen', function (){
    //     return Inertia::render('modulDosen');
    // })->name('admin.modulDosen');
    // Route::get('/modulAslab', function (){
    //     return Inertia::render('modulAslab');
    // })->name('admin.modulAslab');
    // Route::get('/penilaianDosen', function (){
    //     return Inertia::render('penilaianDosen');
    // })->name('admin.penilaianDosen');
    // Route::get('/penilaianAslab', function (){
    //     return Inertia::render('penilaianAslab');
    // })->name('admin.penilaianAslab');
    // Route::get('/manageMateri', function (){
    //     return Inertia::render('manageMateri');
    // })->name('admin.manageMateri');
    // Route::get('/managePelanggaran', function (){
    //     return Inertia::render('managePelanggaran');
    // })->name('admin.pelanggaran');
    // Route::get('/daftarPratikan', function (){
    //     return Inertia::render('daftarPraktikan');
    // })->name('admin.daftarPraktikan');


    Route::get('/login-aslab', function (){
        return Inertia::render('LoginAslab');
    })->name('aslab.login');
    Route::get('/login', function (){
        return Inertia::render('LoginPraktikan');
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
Route::middleware('auth:praktikan')->get('/tes-praktikan', function (){
    return Inertia::render('Test');
});
