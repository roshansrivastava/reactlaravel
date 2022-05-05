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
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('name',255);
            $table->string('stripe_id',255);
            $table->string('stripe_status',255);
            $table->string('stripe_price',255)->nullable();
            $table->integer('quantity')->nullable();
            $table->timestamp('trial_ends_at')->useCurrent();            
            $table->timestamp('ends_at')->useCurrent();            
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
        Schema::dropIfExists('subscriptions');
    }
};
