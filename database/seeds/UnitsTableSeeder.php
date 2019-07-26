<?php

use Illuminate\Database\Seeder;
use TrocaTroca\Models\Sector;
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
        $sectors = Sector::all();
        factory(Unit::class, 15)
            ->create()
            ->each(function (Unit $unit) use ($sectors) {
                 $sectorId = $sectors->random()->id;
                 $unit->sectors()->attach($sectorId);
            });
    }
}
