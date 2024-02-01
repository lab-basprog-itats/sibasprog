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
        Schema::create('praktikum_praktikan', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('praktikum_id')->constrained('praktikum');
            $table->foreignUuid('praktikan_id')->constrained('praktikan');
            $table->foreignUuid('aslab_id')->constrained('aslab');
            $table->foreignUuid('dosen_id')->nullable()->constrained('dosen');
            $table->json('modul_1');
            $table->json('modul_2');
            $table->json('modul_3');
            $table->json('modul_4');
            $table->integer('tes_akhir');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('praktikum_praktikan');
    }
};
