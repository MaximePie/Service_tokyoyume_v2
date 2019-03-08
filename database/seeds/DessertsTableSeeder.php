<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DessertsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('desserts')->insert([
            'name' => "Flan",
            'price' => 0.5,
            'is_available'=> true
        ]);
        //
        DB::table('desserts')->insert([
            'name' => "Compote",
            'price' => 0.5,
            'is_available'=> true
        ]);
    }
}
