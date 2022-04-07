<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileUpload extends Model
{
    use HasFactory;
    protected $table = 'file_uploads';
    protected $fillable = [
        'name',
        'path'
      ];
    
    //   protected $hidden = [
    //     'path',
    //   ];
}