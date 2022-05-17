<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tempfile extends Model
{
    use HasFactory;
    protected $fillable = [
        'file',
        'folder',
        's3_key',
        'created_by',
        'updated_by',
    ];
}
