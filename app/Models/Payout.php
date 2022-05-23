<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payout extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'id',
        'currency',
        'amount',
        'payout_method',
        'user_id',
        'status',
    ];
}
