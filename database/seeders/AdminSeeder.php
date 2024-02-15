<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::create([
            'id' => Str::uuid(),
            'nama' => 'Admin Bahasa Pemrograman',
            'username' => 'lbp2024',
            'password' => Hash::make('lbp2024', ['rounds' => 12])
        ]);
    }
}
