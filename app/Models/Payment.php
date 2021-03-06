<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'payment_id',
        'plan',
        'user_discount',
        'amount',
        'method',
        'user_id',
    ];
}
