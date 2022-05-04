<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class subscription_item extends Model
{
    use HasFactory;

    protected $fillable = 
    [
        'id',
        'subscription_id',
        'stripe_id',
        'stripe_product',
        'stripe_price',
        'quantity',
        
    ];
}
