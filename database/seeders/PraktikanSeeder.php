<?php

namespace Database\Seeders;

use App\Models\Praktikan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PraktikanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Praktikan::create([
            'id' => Str::uuid(),
            'nama' => 'Yuji Aspal Tol Cilacap',
            'npm' => '062022107774',
            'password' => Hash::make('cilacap', ['rounds' => 12])
        ]);
        Praktikan::create([
            'id' => Str::uuid(),
            'nama' => 'Ahmad Alukar',
            'npm' => '062022107794',
            'password' => Hash::make('alukar', ['rounds' => 12])
        ]);
        Praktikan::create([
            'id' => Str::uuid(),
            'nama' => 'brodi niqqas',
            'npm' => '062022107799',
            'password' => Hash::make('niqqas', ['rounds' => 12])
        ]);
    }
}
