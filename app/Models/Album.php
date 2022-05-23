<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Genre;
use App\Models\User;
use App\Models\FileUpload;
use App\Models\Song;

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

    public function user()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }

    public function genre()
    {
        return $this->hasOne('App\Models\Genre','id','genre_id');
    }
    public function fileupload()
    {
        return $this->hasOne('App\Models\FileUpload','id','fuga_cover_image_id');
    }
    // public function songs()
    // {
    //     return $this->hasMany('App\Models\Song','album_id','id');
    // }
}
