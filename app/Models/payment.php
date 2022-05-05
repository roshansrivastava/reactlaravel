<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class payment extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'paymentID',
        'plan',
        'user_discount',
        'amount',
        'method',
        'user_id',
    ];
}
