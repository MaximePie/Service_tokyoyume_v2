<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SandwichesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sandwiches')->insert([
            'name' => "Jambon-fromage",
            'price' => 3,
            'is_available'=> true
        ]);
        DB::table('sandwiches')->insert([
            'name' => "Hot-dog",
            'price' => 3,
            'is_available'=> true
        ]);
        DB::table('sandwiches')->insert([
            'name' => "Thon-mayonnaise",
            'price' => 3,
            'is_available'=> true
        ]);
        DB::table('sandwiches')->insert([
            'name' => "Raclette",
            'price' => 3,
            'is_available'=> false
        ]);
    }
}
