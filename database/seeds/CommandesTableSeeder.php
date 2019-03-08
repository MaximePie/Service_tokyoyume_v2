<?php

use Illuminate\Database\Seeder;

class CommandesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('commandes')->insert([
            'sandwich_id' => 1,
            'nom_client' => "Maxime Pie",
            'price' => 4,
            'etat' => "En cours",
            'boisson_id' => 1,
            'dessert_id' => 1
        ]);        //
        DB::table('commandes')->insert([
            'sandwich_id' => 1,
            'nom_client' => "Julia Colus",
            'price' => 4,
            'etat' => "En cours",
            'boisson_id' => 1,
            'dessert_id' => 1
        ]);        //
        DB::table('commandes')->insert([
            'sandwich_id' => 1,
            'nom_client' => "Kévin Anais",
            'price' => 4,
            'etat' => "En cours",
            'boisson_id' => 1,
            'dessert_id' => 1
        ]);
        DB::table('commandes')->insert([
            'sandwich_id' => 2,
            'nom_client' => "Camilla",
            'price' => 4,
            'etat' => "En cours",
            'boisson_id' => 1,
            'dessert_id' => 1
        ]);
        DB::table('commandes')->insert([
            'sandwich_id' => 3,
            'nom_client' => "Fabien",
            'price' => 4,
            'etat' => "En cours",
            'boisson_id' => 1,
            'dessert_id' => 1
        ]);

    }
}
