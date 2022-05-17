<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'composer',
        'isrc',
        'language',
        'isExplicit',
        'isInstrumental',
        'songFile',
        'album_id',
        'fuga_track_id',
        'fuga_link_release_track_id',
        'audio_locale_id'
    ];
}