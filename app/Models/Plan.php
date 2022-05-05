<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'title',
        'release_amount',
        'amount',
        'total_amount',
        'discount_percent',
        'discount_amount',
        'content_1',
        'content_2',
        'content_3',
        'content_4',
        'content_5',
        'button',
        'show_button',
        'created_by',
        'updated_by',
        'status',
        'stripe_plan_id',
    ];
    // protected $casts = [
    //     'description' => 'array'
    // ];
}
