<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use TrocaTroca\Models\City;
use Faker\Generator as Faker;
use TrocaTroca\Models\State;

$factory->define(City::class, function (Faker $faker) {
    $state = State::all();
    $state_id = $state->random()->id;
    return [
        'city_name' => $faker->city,
        'state_id' => $state_id,
        'created_at' => Carbon\Carbon::now(),
        'updated_at' => Carbon\Carbon::now()
    ];
});
