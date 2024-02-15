<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PraktikumPraktikan extends Model
{
    use HasFactory;
    protected $table = 'praktikum_praktikan';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];

    public function Aslab(): BelongsTo
    {
        return $this->belongsTo(Aslab::class, 'aslab_id', 'id');
    }
    public function Dosen(): BelongsTo
    {
        return $this->belongsTo(Dosen::class, 'dosen_id', 'id');
    }
    public function Praktikum(): BelongsTo
    {
        return $this->belongsTo(Praktikum::class, 'praktikum_id', 'id');
    }
    public function Praktikan(): BelongsTo
    {
        return $this->belongsTo(Praktikan::class, 'praktikan_id', 'id');
    }
}
