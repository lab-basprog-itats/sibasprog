<?php

namespace Database\Seeders;

use App\Models\Aslab;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AslabSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Aslab::create([
            'id' => Str::uuid(),
            'nama' => 'Shinota Paxl',
            'npm' => '062021107461',
            'no_hp' => '0858552615782',
            'password' => Hash::make('orangss', [ 'rounds' => 12]),
        ]);
        Aslab::create([
            'id' => Str::uuid(),
            'nama' => 'Gusion Cibaduyut',
            'npm' => '062021107471',
            'no_hp' => '0895395126645',
            'password' => Hash::make('cibaduyut', [ 'rounds' => 12]),
            'aktif' => true
        ]);
        Aslab::create([
            'id' => Str::uuid(),
            'nama' => 'Arlott Sumedang',
            'npm' => '062021107481',
            'no_hp' => '081284152216',
            'password' => Hash::make('sumedang', [ 'rounds' => 12]),
        ]);
    }
}
