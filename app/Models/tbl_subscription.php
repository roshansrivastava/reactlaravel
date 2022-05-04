<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_subscription extends Model
{
    use HasFactory;

    protected $fillables = [
        'id',
        'user_id',
        'plan_id',
        'stripe_customer_id',
        'stripe_subscription_id',
        'stripe_plan_start',
        'stripe_plan_end',
    ];
}
