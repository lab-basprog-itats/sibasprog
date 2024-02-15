<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Praktikum extends Model
{
    use HasFactory;
    protected $table = 'praktikum';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];

    public function JawabanAsistensi()
    {
        return $this->hasMany(JawabanAsistensi::class, 'praktikum_id', 'id');
    }
    public function Praktikan()
    {
        return $this->hasMany(PraktikumPraktikan::class, 'praktikum_id', 'id');
    }
}
