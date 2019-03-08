<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumToCommandesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('commandes', function (Blueprint $table) {
            $table->integer('boisson_id')->unsigned()->nullable();
            $table->integer('dessert_id')->unsigned()->nullable();

            $table->foreign('boisson_id')->references('id')->on('boissons');
            $table->foreign('dessert_id')->references('id')->on('desserts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('commandes', function (Blueprint $table) {
            //
        });
    }
}
