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

    //  database table name always small letter
    public function up()
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->string('title',255);
            $table->integer('release_amount')->nullable();
            $table->float('amount');
            $table->float('total_amount')->nullable();
            $table->float("discount_percent")->nullable();
            $table->float('discount_amount')->nullable();
            $table->longText('content_1')->nullable();
            $table->longText('content_2')->nullable();
            $table->longText('content_3')->nullable();
            $table->longText('content_4')->nullable();
            $table->longText('content_5')->nullable();
            $table->string('button',255)->nullable();
            $table->string('show_button',255)->nullable(); 
            $table->integer('created_by')->nullable();
            $table->timestamps();
            $table->integer("updated_by")->nullable();
            $table->integer("status")->default(0);
            $table->string('stripe_plan_id',255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plans');
    }
};
