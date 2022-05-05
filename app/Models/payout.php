<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class payout extends Model
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
