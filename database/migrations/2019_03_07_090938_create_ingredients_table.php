<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredients', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('quantity_per_sandwich');
            $table->float("unit_price");
            $table->integer('stock');
            $table->boolean('is_critical');
            $table->string('category');
            $table->integer('sandwich_id')->unsigned()->nullable();
            $table->timestamps();

            $table->foreign('sandwich_id')->references('id')->on('sandwiches')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingredients');
    }
}
