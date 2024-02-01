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
        Schema::create('aslab', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nama');
            $table->string('npm')->unique();
            $table->string('password');
            $table->string('no_hp')->nullable();
            $table->boolean('aktif')->default(false);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aslab');
    }
};
