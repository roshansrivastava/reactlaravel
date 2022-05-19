<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'upc',
        'genre_id',
        'release',
        'status',
        'store',
        'cover',
        'note',
        'spotify_url',
        'apple_music_url',
        'user_id',
        'fuga_product_id',
        'fuga_cover_image_id',
        'language_id',
        'song_deleted',
    ];
}
