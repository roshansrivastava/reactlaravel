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
            $table->integer('user_id')->nullable();
            $table->integer('plan_id')->nullable();
            $table->string('stripe_customer_id',255)->nullable();
            $table->string('stripe_subscription_id',255)->nullable();
            $table->string('stripe_plan_start',255)->nullable();
            $table->string('stripe_plan_end',255)->nullable();
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
