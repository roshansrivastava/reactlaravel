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
        Schema::create('custom_payment_infos', function (Blueprint $table) {
            $table->id();
            $table->string('subscrption_price',100)->nullable();
            $table->string('stripe_secret_key',255)->nullable();
            $table->string('stripe_publish_key',255)->nullable();
            $table->string('paypal_client_key',255)->nullable();
            $table->string('paypal_secret_key',255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('custom_payment_infos');
    }
};
