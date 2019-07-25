<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use TrocaTroca\Models\Sector;
use Faker\Generator as Faker;

$factory->define(Sector::class, function (Faker $faker) {
    return [
        'sector_name' => $faker->word,
        'created_at' => Carbon\Carbon::now(),
        'updated_at' => Carbon\Carbon::now()
    ];
});
