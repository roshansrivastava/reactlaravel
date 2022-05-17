<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Copyright extends Model
{
    use HasFactory;
    protected $fillable = [
        'song_id',
        'comment',
        'copyright_status',
        'copyright_artist',
        'copyright_title',
        'copyright_album',
        'copyright_release_date',
        'copyright_label',
        'copyright_time_code',
        'copyright_song_link',
        'error_details',
        'copyright_release_date',
        'created_by',
        'updated_by'
    ];
}
