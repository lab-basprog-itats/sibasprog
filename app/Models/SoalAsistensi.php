<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoalAsistensi extends Model
{
    use HasFactory;
    protected $table = 'soal_asistensi';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];

    public function JawabanAsisensi()
    {
        return $this->hasMany(JawabanAsistensi::class, 'soal_id', 'id');
    }
}
