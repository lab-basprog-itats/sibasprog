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
        Schema::create('jawaban_asistensi', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('soal_id')->constrained('soal_asistensi');
            $table->foreignUuid('praktikan_id')->constrained('praktikan');
            $table->string('file');
            $table->string('catatan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jawaban_asistensi');
    }
};
