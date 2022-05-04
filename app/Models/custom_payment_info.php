<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class custom_payment_info extends Model
{
    use HasFactory;
    protected $fillable= [
        'id',
        'subscrption_price',
        'stripe_secret_key',
        'stripe_publish_key',
        'paypal_client_key',
        'paypal_secret_key',
    ];
}
