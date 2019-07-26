<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExchangesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exchanges', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('unit_id')->unsigned();
            $table->foreign('unit_id')->references('id')->on('units');
            $table->bigInteger('sector_id')->unsigned();
            $table->foreign('sector_id')->references('id')->on('sectors');
            $table->bigInteger('user1_id')->unsigned();
            $table->foreign('user1_id')->references('id')->on('users');
            $table->bigInteger('group1_id')->unsigned();
            $table->foreign('group1_id')->references('id')->on('groups');
            $table->bigInteger('user2_id')->unsigned();
            $table->foreign('user2_id')->references('id')->on('users');
            $table->bigInteger('group2_id')->unsigned();
            $table->foreign('group2_id')->references('id')->on('groups');
            $table->date('date');
            $table->bigInteger('turn_id')->unsigned();
            $table->foreign('turn_id')->references('id')->on('turns');
            $table->bigInteger('type1_id')->unsigned();
            $table->foreign('type1_id')->references('id')->on('types');
            $table->bigInteger('type2_id')->unsigned();
            $table->foreign('type2_id')->references('id')->on('types');
            $table->bigInteger('status_id')->unsigned();
            $table->foreign('status_id')->references('id')->on('statuses');
            $table->date('date_cadastro');
            $table->date('date_confirmation')->nullable();
            $table->date('date_autorization')->nullable();
            $table->date('date_declination')->nullable();
            $table->date('date_cancelation')->nullable();
            $table->date('date_conclusion')->nullable();
            $table->date('date_pending')->nullable();
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
        Schema::dropIfExists('exchanges');
    }
}
