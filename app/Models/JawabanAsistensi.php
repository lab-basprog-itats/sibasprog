<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JawabanAsistensi extends Model
{
    use HasFactory;
    protected $table = 'jawaban_asistensi';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];

    public function SoalAsistensi(): BelongsTo
    {
        return $this->belongsTo(SoalAsistensi::class, 'soal_id', 'id');
    }
    public function Praktikan(): BelongsTo
    {
        return $this->belongsTo(Praktikan::class, 'praktikan_id', 'id');
    }
}
