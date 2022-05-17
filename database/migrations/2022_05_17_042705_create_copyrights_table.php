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
        Schema::create('copyrights', function (Blueprint $table) {
            $table->id();
            $table->integer('song_id')->nullable();
            $table->text('comment')->nullable();
            $table->text('copyright_status')->nullable();
            $table->text('copyright_artist')->nullable();
            $table->text('copyright_title')->nullable();
            $table->text('copyright_album')->nullable();
            $table->text('copyright_release_date')->nullable();
            $table->text('copyright_label')->nullable();
            $table->text('copyright_time_code')->nullable();
            $table->text('copyright_song_link')->nullable();
            $table->text('error_details')->nullable();
            $table->timestamp('created_at')->useCurrent(); 
            $table->timestamp('updated_at')->nullable();
            $table->string('created_by',255)->nullable();
            $table->string('updated_by',255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('copyrights');
    }
};
