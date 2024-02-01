<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('soal_asistensi', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('praktikum_id')->constrained('praktikum');
            $table->foreignUuid('aslab_id')->constrained('aslab');
            $table->string('kode')->nullable();
            $table->string('modul');
            $table->string('catatan')->nullable();
            $table->string('file');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('soal_asistensi');
    }
};
