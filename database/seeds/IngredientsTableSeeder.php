<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class IngredientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ingredients')->insert([
            'name' => "Fromage",
            'quantity_per_sandwich'=> 1,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'ingredient',
            'sandwich_id'=> 1,
            'is_critical'=> true
        ]);
        DB::table('ingredients')->insert([
            'name' => "Jambon",
            'quantity_per_sandwich'=> 1,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'ingredient',
            'sandwich_id'=> 1,
            'is_critical'=> true
        ]);
        DB::table('ingredients')->insert([
            'name' => "Beurre",
            'quantity_per_sandwich'=> 1,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'sauce',
            'sandwich_id'=> 1,
            'is_critical'=> true
        ]);
        DB::table('ingredients')->insert([
            'name' => "Thon",
            'quantity_per_sandwich'=> 1,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'ingredient',
            'sandwich_id'=> 3,
            'is_critical'=> true
        ]);
        DB::table('ingredients')->insert([
            'name' => "Salade",
            'quantity_per_sandwich'=> 1,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'ingredient',
            'sandwich_id'=> 1,
            'is_critical'=> true
        ]);
        DB::table('ingredients')->insert([
            'name' => "Knacki",
            'quantity_per_sandwich'=> 2,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'ingredient',
            'sandwich_id'=> 2,
            'is_critical'=> true
        ]);
        DB::table('ingredients')->insert([
            'name' => "Ketchup",
            'quantity_per_sandwich'=> 1,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'sauce',
            'sandwich_id'=> 2,
            'is_critical'=> true
        ]);
        DB::table('ingredients')->insert([
            'name' => "Mayonnaise",
            'quantity_per_sandwich'=> 1,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'sauce',
            'sandwich_id'=> 3,
            'is_critical'=> true
        ]);

        //Desserts
        DB::table('ingredients')->insert([
            'name' => "flan",
            'quantity_per_sandwich'=> 1,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'dessert',
            'is_critical'=> true
        ]);
        DB::table('ingredients')->insert([
            'name' => "compote",
            'quantity_per_sandwich'=> 1,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'dessert',
            'is_critical'=> true
        ]);

        //Boissons
        DB::table('ingredients')->insert([
            'name' => "Coca-cola",
            'quantity_per_sandwich'=> 1,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'boisson',
            'is_critical'=> true
        ]);
        DB::table('ingredients')->insert([
            'name' => "Oasis",
            'quantity_per_sandwich'=> 1,
            'unit_price' => 0.5,
            'stock'=> 0,
            'category'=>'boisson',
            'is_critical'=> true
        ]);
    }
}
