<?php

namespace Database\Seeders;

use App\Models\Praktikum;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Str;

class PraktikumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
//$table->uuid('id')->primary();
//$table->string('kode')->unique();
//$table->string('nama');
//$table->string('periode');
//$table->year('tahun');
//$table->boolean('aktif')->default(false);
//$table->json('jadwal_modul_1')->nullable();
//$table->json('jadwal_modul_2')->nullable();
//$table->json('jadwal_modul_3')->nullable();
//$table->json('jadwal_modul_4')->nullable();
//$table->date('tes_akhir')->nullable();


    public function run(): void
    {
        // Hitung tanggal sekarang
        $now = Carbon::now();

        // Tanggal mulai praktikum
        $mulaiPraktikum = $now->toDateString();
        $selesaiPraktikum = $now->addMonths(3)->toDateString();
        $tanggalModul1 = $mulaiPraktikum;
        $tanggalModul2 = Carbon::parse($mulaiPraktikum)->addWeeks(2)->toDateString();
        $tanggalModul3 = Carbon::parse($mulaiPraktikum)->addWeeks(4)->toDateString();
        $tanggalModul4 = Carbon::parse($mulaiPraktikum)->addWeeks(6)->toDateString();
        $tanggalTesAkhir = Carbon::parse($mulaiPraktikum)->addWeeks(12)->toDateString();


        $PT_XIV_Date = Carbon::now();
        Praktikum::create([
            'id' => Str::uuid(),
            'kode' => 'PT-XIV',
            'nama' => 'Pemrograman Terstruktur',
            'periode' => 'XIV',
            'tahun' => '2023',
            'jadwal_modul_1' => Json::encode([
                'mulai' => $PT_XIV_Date->toDateString(),
                'akhir' => $PT_XIV_Date->addWeeks(2)->subDays(2)->toDateString()
            ]),
            'jadwal_modul_2' => Json::encode([
                'mulai' => $PT_XIV_Date->addWeeks(2)->toDateString(),
                'akhir' => $PT_XIV_Date->addWeeks(4)->subDays(2)->toDateString()
            ]),
            'jadwal_modul_3' => Json::encode([
                'mulai' => $PT_XIV_Date->addWeeks(4)->toDateString(),
                'akhir' => $PT_XIV_Date->addWeeks(6)->subDays(2)->toDateString()
            ]),
            'jadwal_modul_4' => Json::encode([
                'mulai' => $PT_XIV_Date->addWeeks(6)->toDateString(),
                'akhir' => $PT_XIV_Date->addWeeks(8)->subDays(2)->toDateString()
            ]),
            'jadwal_tes_akhir' => Json::encode([
                'mulai' => $PT_XIV_Date->addWeeks(9)->toDateString(),
                'akhir' => $PT_XIV_Date->addWeeks()->toDateString()
            ]),
        ]);

        $SD_XV_Date = Carbon::parse(Carbon::now()->addWeeks(12));
        Praktikum::create([
            'id' => Str::uuid(),
            'kode' => 'SD-XV',
            'nama' => 'Struktur Data',
            'periode' => 'XV',
            'tahun' => '2024',
            'jadwal_modul_1' => Json::encode([
                'mulai' => $SD_XV_Date->toDateString(),
                'akhir' => $SD_XV_Date->addWeeks(2)->subDays(2)->toDateString()
            ]),
            'jadwal_modul_2' => Json::encode([
                'mulai' => $SD_XV_Date->addWeeks(2)->toDateString(),
                'akhir' => $SD_XV_Date->addWeeks(4)->subDays(2)->toDateString()
            ]),
            'jadwal_modul_3' => Json::encode([
                'mulai' => $SD_XV_Date->addWeeks(4)->toDateString(),
                'akhir' => $SD_XV_Date->addWeeks(6)->subDays(2)->toDateString()
            ]),
            'jadwal_modul_4' => Json::encode([
                'mulai' => $SD_XV_Date->addWeeks(6)->toDateString(),
                'akhir' => $SD_XV_Date->addWeeks(8)->subDays(2)->toDateString()
            ]),
            'jadwal_tes_akhir' => Json::encode([
                'mulai' => $SD_XV_Date->addWeeks(9)->toDateString(),
                'akhir' => $SD_XV_Date->addWeeks()->toDateString()
            ]),
            'aktif' => true
        ]);

        $PT_XV_Date = Carbon::parse(Carbon::now())->addWeeks(24);
        Praktikum::create([
            'id' => Str::uuid(),
            'kode' => 'PT-XV',
            'nama' => 'Pemrograman Terstruktur',
            'periode' => 'XV',
            'tahun' => '2024',
            'jadwal_modul_1' => Json::encode([
                'mulai' => $PT_XV_Date->toDateString(),
                'akhir' => $PT_XV_Date->addWeeks(2)->subDays(2)->toDateString()
            ]),
            'jadwal_modul_2' => Json::encode([
                'mulai' => $PT_XV_Date->addWeeks(2)->toDateString(),
                'akhir' => $PT_XV_Date->addWeeks(4)->subDays(2)->toDateString()
            ]),
            'jadwal_modul_3' => Json::encode([
                'mulai' => $PT_XV_Date->addWeeks(4)->toDateString(),
                'akhir' => $PT_XV_Date->addWeeks(6)->subDays(2)->toDateString()
            ]),
            'jadwal_modul_4' => Json::encode([
                'mulai' => $PT_XV_Date->addWeeks(6)->toDateString(),
                'akhir' => $PT_XV_Date->addWeeks(8)->subDays(2)->toDateString()
            ]),
            'jadwal_tes_akhir' => Json::encode([
                'mulai' => $PT_XV_Date->addWeeks(9)->toDateString(),
                'akhir' => $PT_XV_Date->addWeeks()->toDateString()
            ]),
        ]);
    }
}
