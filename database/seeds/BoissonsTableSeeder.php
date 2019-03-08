<?php

use Illuminate\Database\Seeder;

class BoissonsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('boissons')->insert([
            'name' => "Coca",
            'price' => 0.5,
            'is_available'=> true
        ]);
        //
        DB::table('boissons')->insert([
            'name' => "Oasis",
            'price' => 0.5,
            'is_available'=> true
        ]);
    }
}
