<?php

use Faker\Generator as Faker;
use TrocaTroca\Models\Sector;
use TrocaTroca\Models\Unit;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(TrocaTroca\Models\User::class, function (Faker $faker) {
    $unit = Unit::all();
    $unit_id = $unit->random()->id;
    $sector = Sector::all();
    $sector_id = $sector->random()->id;
    return [
        'unit_id' => $unit_id,
        'sector_id' => $sector_id,
        'key' => str_random(4),
        'username' => $faker->userName,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        //'password' => 'secret',
        'remember_token' => str_random(10),
        'created_at' => Carbon\Carbon::now(),
        'updated_at' => Carbon\Carbon::now()
    ];
});
