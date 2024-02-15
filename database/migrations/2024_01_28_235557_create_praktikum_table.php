<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('praktikum', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('kode')->unique();
            $table->string('nama');
            $table->string('periode');
            $table->year('tahun');
            $table->boolean('aktif')->default(false);
            $table->json('jadwal_modul_1');
            $table->json('jadwal_modul_2');
            $table->json('jadwal_modul_3');
            $table->json('jadwal_modul_4');
            $table->json('jadwal_tes_akhir');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('praktikum');
    }
};
