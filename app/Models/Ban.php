<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ban extends Model
{
    use HasFactory;
    protected $fillable = [
        'bannable_type',
        'bannable_id',
        'created_by_type',
        'created_by_id',
        'comment',
        'expired_at',
        'deleted_at',
    ];
}
