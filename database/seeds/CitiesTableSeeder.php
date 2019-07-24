<?php

use Illuminate\Database\Seeder;
use TrocaTroca\Models\City;

class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(City::class, 50)->create();
    }
}
