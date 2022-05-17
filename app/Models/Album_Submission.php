<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album_Submission extends Model
{
    use HasFactory;
    
    protected $fillable =[
        'album_id',
        'publisher',
        'publisher_album_id',
        'status',
        'logs'
    ];
    
}
