<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\PraktikumPraktikan;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            LaboratoriumSeeder::class,
            AslabSeeder::class,
            PraktikanSeeder::class,
            PraktikumSeeder::class,
            PraktikumPraktikanSeeder::class
        ]);
    }
}
