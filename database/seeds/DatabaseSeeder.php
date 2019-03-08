<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(SandwichesTableSeeder::class);
        $this->call(IngredientsTableSeeder::class);
        $this->call(BoissonsTableSeeder::class);
        $this->call(DessertsTableSeeder::class);
        //$this->call(CommandesTableSeeder::class);
    }
}
