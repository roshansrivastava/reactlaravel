<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class OauthAccessToken extends Model
{
    use HasFactory;

    public function AauthAcessToken()
    {
     return $this->hasMany('\App\OauthAccessToken');
    }

}
