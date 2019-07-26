<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use TrocaTroca\Models\Exchange;
use Faker\Generator as Faker;
use TrocaTroca\Models\Group;
use TrocaTroca\Models\Sector;
use TrocaTroca\Models\Turn;
use TrocaTroca\Models\Type;
use TrocaTroca\Models\Unit;
use TrocaTroca\Models\User;

$factory->define(Exchange::class, function (Faker $faker) {
    $units = Unit::all();
    $sectors = Sector::all();
    $users = User::all();
    $groups = Group::all();
    $turns = Turn::all();
    $types = Type::all();
    $unitId = $units->random()->id;
    $sectorId = $sectors->random()->id;
    $user1Id = $users->random()->id;
    $group1Id = $groups->random()->id;
    $turnId = $turns->random()->id;
    $type1Id = $types->random()->id;
    $user2Id = $users->random()->id;
    $group2Id = $groups->random()->id;
    if ($user1Id === $user2Id) {
        $user2Id = $users->random()->id;
    }
    if ($group1Id === $group2Id) {
        $group2Id = $groups->random()->id;
    }
    if ($type1Id == 1) {
        $type2Id = 2;
    } else {
        $type2Id = 1;
    }
    return [
        'unit_id' => $unitId,
        'sector_id' => $sectorId,
        'user1_id' => $user1Id,
        'group1_id' => $group1Id,
        'user2_id' => $user2Id,
        'group2_id' => $group2Id,
        'date' => $faker->dateTimeBetween($startDate = 'now', $endDate = '1 year', $timezone = null),
        'turn_id' => $turnId,
        'type1_id' => $type1Id,
        'type2_id' => $type2Id,
        'date_cadastro' => Carbon\Carbon::now(),
        'created_at' => Carbon\Carbon::now(),
        'updated_at' => Carbon\Carbon::now()
    ];
});
