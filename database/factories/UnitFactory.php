<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use TrocaTroca\Models\City;
use TrocaTroca\Models\Unit;
use Faker\Generator as Faker;

$factory->define(Unit::class, function (Faker $faker) {
    $city = City::all();
    $city_id = $city->random()->id;
    return [
        'unit_name' => $faker->word,
        'city_id' => $city_id,
        'created_at' => Carbon\Carbon::now(),
        'updated_at' => Carbon\Carbon::now()
    ];
});
