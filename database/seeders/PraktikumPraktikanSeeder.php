<?php

namespace Database\Seeders;

use App\Models\PraktikumPraktikan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PraktikumPraktikanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PraktikumPraktikan::create([
            'id' => Str::uuid(),
            'praktikum_id' => DB::table('praktikum')->value('id'),
            'praktikan_id' => DB::table('praktikan')->value('id'),
            'aslab_id' => DB::table('aslab')->value('id'),
            'modul_1' => Json::encode([
                'praktikum' => 0,
                'asistensi' => 0,
                'sikap' => 0,
                'catatan' => ''
            ]),
            'modul_2' => Json::encode([
                'praktikum' => 0,
                'asistensi' => 0,
                'sikap' => 0,
                'catatan' => ''
            ]),
            'modul_3' => Json::encode([
                'praktikum' => 0,
                'asistensi' => 0,
                'sikap' => 0,
                'catatan' => ''
            ]),
            'modul_4' => Json::encode([
                'praktikum' => 0,
                'asistensi' => 0,
                'sikap' => 0,
                'catatan' => ''
            ]),
            'tes_akhir' => 0
        ]);
    }
}
