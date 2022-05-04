<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('profile_picture',500)->nullable();
            $table->tinyInteger('type')->default(0);
            $table->tinyInteger('isPremium')->default(0);
            $table->int('plan')->default(6);
            $table->string('btcAddress',255)->nullable();
            $table->string('ltcAddress',255)->nullable();
            $table->string('ethAddress',255)->nullable();
            $table->string('paypalEmail',255)->nullable();
            $table->string('iban',255)->nullable();
            $table->decimal('balance')->default(0.00);
            $table->string('address_1',255)->nullable();
            $table->string('address_2',255)->nullable();
            $table->string('city',50)->nullable();
            $table->string('state',50)->nullable();
            $table->string('zip',50)->nullable();
            $table->string('f_name',50)->nullable();
            $table->string('l_name',50)->nullable();
            $table->string('otp',50)->nullable();
            $table->timestamp('otp_created_at')->nullable();
            $table->tinyInteger('otp_mail')->default(0);
            $table->int('welcome_alert')->default(0);
            $table->int('support_pin')->nullable();
            $table->bigInteger('fuga_artist_id')->nullable();
            $table->bigInteger('fuga_label_id')->nullable();
            $table->string('stripe_customer_id',255)->nullable();
            $table->string('stripe_subscription_id',255)->nullable();
            $table->tinyInteger('stripe_subscription_status')->default(1);
            $table->dateTime('stripe_start_date')->nullable();
            $table->dateTime('stripe_end_date')->nullable();
            $table->timestamp('banned_at')->nullable();
            $table->string('stripe_id',255)->nullable();
            $table->string('pm_type',255)->nullable();
            $table->string('pm_last_four',255)->nullable();
            $table->timestamp('trial_ends_at')->nullable();
            $table->dateTime('subscription_ends_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
