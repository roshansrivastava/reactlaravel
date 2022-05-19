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
        Schema::create('albums', function (Blueprint $table) {
            $table->id();
            $table->string('title',255);
            $table->string('upc',255)->nullable();
            $table->bigInteger('genre_id');
            $table->date('release');
            $table->tinyInteger('status')->default(0);
            $table->json('store')->nullable();
            $table->string('cover',255);
            $table->string('spotify_url',555)->nullable();
            $table->string('apple_music_url',555)->nullable();
            $table->bigInteger('user_id');
            $table->bigInteger('fuga_product_id')->nullable();
            $table->bigInteger('fuga_cover_image_id')->nullable();
            $table->bigInteger('language_id')->nullable();
            $table->enum('song_deleted',['Yes', 'No'])->default('No');
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
        Schema::dropIfExists('albums');
    }
};
