<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_Store_Bknd extends Model
{
    use HasFactory;
    protected $fillable = [
        'store_id',
        'album_id',
        'created_at',
        'updated_at',
    ];
}
