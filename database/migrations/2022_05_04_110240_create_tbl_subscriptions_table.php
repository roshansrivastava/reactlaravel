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
        Schema::create('tbl_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->Integer('user_id')->null();
            $table->Integer('plan_id')->null();
            $table->string('stripe_customer_id',255)->null();
            $table->string('stripe_subscription_id',255)->null();
            $table->string('stripe_plan_start',255)->null();
            $table->string('stripe_plan_end',255)->null();
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
        Schema::dropIfExists('tbl_subscriptions');
    }
};
