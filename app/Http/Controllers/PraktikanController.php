<?php

namespace App\Http\Controllers;

use App\Models\Praktikan;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

class PraktikanController extends Controller
{
    public function dashboardPage(Request $request)
    {
        try {
            $praktikanUser = $request->user('praktikan');
            $praktikanData = DB::table('praktikum')
                ->select(
                    'aslab.nama as nama_aslab', 'aslab.npm as npm_aslab', 'aslab.no_hp as no_hp_aslab',
                    'praktikum.jadwal_modul_1', 'praktikum.jadwal_modul_2', 'praktikum.jadwal_modul_3', 'praktikum.jadwal_modul_4', 'praktikum.jadwal_tes_akhir',
                    'praktikum_praktikan.modul_1', 'praktikum_praktikan.modul_2', 'praktikum_praktikan.modul_3', 'praktikum_praktikan.modul_4', 'praktikum_praktikan.tes_akhir'
                )
                ->join('praktikum_praktikan', 'praktikum.id', '=', 'praktikum_id')
                ->join('aslab', 'aslab_id', '=', 'aslab.id')
                ->where('praktikum.aktif', '=',true)
                ->where('praktikum_praktikan.praktikan_id', '=', $praktikanUser['id'])
                ->first();

            return Inertia::render('PraktikanDashboardPage', [
                'praktikanData' => fn() => [
                    'aslab' => [
                        'nama' => $praktikanData->nama_aslab,
                        'npm' => $praktikanData->npm_aslab,
                        'noHp' => $praktikanData->no_hp_aslab
                    ],
                    'statusPraktikum' => [
                        'modul1' => Json::decode($praktikanData-> modul_1),
                        'modul2' => Json::decode($praktikanData->modul_2),
                        'modul3' => Json::decode($praktikanData->modul_3),
                        'modul4' => Json::decode($praktikanData->modul_4),
                        'tesAkhir' => Json::decode($praktikanData->tes_akhir),
                    ],
                    'jadwalPraktikum' => [
                        'modul1' => Json::decode($praktikanData->jadwal_modul_1),
                        'modul2' => Json::decode($praktikanData->jadwal_modul_2),
                        'modul3' => Json::decode($praktikanData->jadwal_modul_3),
                        'modul4' => Json::decode($praktikanData->jadwal_modul_4),
                        'tesAkhir' => Json::decode($praktikanData->jadwal_tes_akhir),
                    ]
                ]
            ]);
        } catch (QueryException) {
            abort(500);
        }

    }

    public function praktikumPage(Request $request)
    {
        try {
            $praktikanUser = $request->user('praktikan');

            $praktikanData = DB::table('praktikum_praktikan')
                ->select(
                    'aslab.nama as nama_aslab', 'aslab.npm as npm_aslab', 'aslab.no_hp as no_hp_aslab',
                    'dosen.nama', 'dosen.nip', 'dosen.no_hp',
                    'praktikum.jadwal_modul_1', 'praktikum.jadwal_modul_2', 'praktikum.jadwal_modul_3', 'praktikum.jadwal_modul_4', 'praktikum.jadwal_tes_akhir',
                    'praktikum_praktikan.modul_1', 'praktikum_praktikan.modul_2', 'praktikum_praktikan.modul_3', 'praktikum_praktikan.modul_4', 'praktikum_praktikan.tes_akhir'
                )
                ->join('aslab', 'aslab_id', '=', 'aslab.id')
                ->join('dosen','dosen_id', '=', 'dosen.id')
                ->join('praktikum', 'praktikum_id', 'praktikum.id')
                ->where('praktikum.aktif', '=',true)
                ->where('praktikum_praktikan.praktikan_id', '=', $praktikanUser['id'])
                ->first();

            return Inertia::render('PraktikanPraktikumPage', [
                'praktikanData' => fn() => [
                    'aslab' => [
                        'nama' => $praktikanData->nama_aslab,
                        'npm' => $praktikanData->npm_aslab,
                        'noHp' => $praktikanData->no_hp_aslab
                    ],
                    'statusPraktikum' => [
                        'modul1' => Json::decode($praktikanData-> modul_1),
                        'modul2' => Json::decode($praktikanData->modul_2),
                        'modul3' => Json::decode($praktikanData->modul_3),
                        'modul4' => Json::decode($praktikanData->modul_4),
                        'tesAkhir' => Json::decode($praktikanData->tes_akhir),
                    ],
                    'jadwalPraktikum' => [
                        'modul1' => Json::decode($praktikanData->jadwal_modul_1),
                        'modul2' => Json::decode($praktikanData->jadwal_modul_2),
                        'modul3' => Json::decode($praktikanData->jadwal_modul_3),
                        'modul4' => Json::decode($praktikanData->jadwal_modul_4),
                        'tesAkhir' => Json::decode($praktikanData->jadwal_tes_akhir),
                    ]
                ]
            ]);
        } catch (\Exception) {
            abort(500);
        }
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Praktikan $praktikan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Praktikan $praktikan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Praktikan $praktikan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Praktikan $praktikan)
    {
        //
    }
}
