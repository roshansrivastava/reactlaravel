<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Models\Role;
use App\Models\Store;
use App\Models\Plan;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'fullname',
        'artistname',
        'email',
        'password',
        'role_id',
        'store_id',
        'activation_token',
        'is_status',
        'email_verified_at',
        'slug',
        'slug_created_at',
        'plan_id',
        'release_id',
        'profile_picture',
        'type',
        'is_premium',
        'plan',
        'btc_address',
        'ltc_address',
        'eth_address',
        'paypal_email',
        'iban',
        'balance',
        'address_1',
        'address_2',
        'city',
        'state',
        'zip',
        'f_name',
        'l_name',
        'otp',
        'otp_created_at',
        'otp_mail',
        'welcome_alert',
        'support_pin',
        'fuga_artist_id',
        'fuga_label_id',
        'stripe_customer_id',
        'stripe_subscription_id',
        'stripe_subscription_status',
        'stripe_start_date',
        'stripe_end_date',
        'banned_at',
        'stripe_id',
        'pm_type',
        'pm_last_four',
        'trial_ends_at',
        'subscription_ends_at'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function role()
    {
        return $this->hasOne('App\Models\Role', 'id', 'role_id');
    }

    public function AauthAcessToken(){
        return $this->hasMany('\App\Models\OauthAccessToken');
    }
    
    public function scopeSearch($query, $searchTerm) {
        if ($searchTerm) {
            $search = $searchTerm;
            $query->where('name', 'like', "%" . $search . "%");
            $query->orWhere('fullname', 'like', "%" . $search . "%");
            $query->orWhere('email', 'like', "%" . $search . "%");


        }
        return $query;
        //     ->where('name', 'like', "%" . $search . "%")
        //     ->orWhere('lastname', 'like', "%" . $search . "%")
        //     ->orWhere('email', 'like', "%" . $search . "%");
    }

}
