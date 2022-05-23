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
        Schema::create('songs', function (Blueprint $table) {
            $table->id();
            $table->string('title',255);
            $table->string('composer',255);
            $table->string('isrc',255)->nullable();
            $table->string('language',255);
            $table->tinyInteger('is_explicit')->nullable();
            $table->tinyInteger('is_instrumental')->nullable();
            $table->string('song_file',255)->nullable();
            $table->bigInteger('album_id');
            $table->string('fuga_track_id',255)->nullable();
            $table->string('fuga_link_release_track_id',255)->nullable();
            $table->bigInteger('audio_locale_id')->nullable();
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
        Schema::dropIfExists('songs');
    }
};
