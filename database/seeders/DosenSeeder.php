<?php

namespace Database\Seeders;

use App\Models\Dosen;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DosenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Dosen::create([
            'id' => Str::uuid(),
            'nip' => '024112',
            'nama' => 'Asep Saipul Hamdan Jamaluddin, S.Kom., M.Kom.',
            'no_hp' => '6285731399077'
        ]);
        Dosen::create([
            'id' => Str::uuid(),
            'nip' => '024114',
            'nama' => 'Hikari nur Cahyo, S.Kom., M.Kom.',
            'no_hp' => '6281284152218'
        ]);
        Dosen::create([
            'id' => Str::uuid(),
            'nip' => '024115',
            'nama' => 'Elaina Annisa Zahra, S.Kom., M.Kom.',
            'no_hp' => '628953951187643'
        ]);
    }
}
