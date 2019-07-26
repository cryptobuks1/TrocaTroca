<?php

use Illuminate\Database\Seeder;
use TrocaTroca\Models\Unit;

class UnitsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Unit::class, 15)->create();
    }
}
