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
        Schema::create('album__submissions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('album_id');
            $table->tinyInteger('publisher')->default(1);
            $table->bigInteger('publisher_album_id')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->longText('logs')->nullable();
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
        Schema::dropIfExists('album__submissions');
    }
};
