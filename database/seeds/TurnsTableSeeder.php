<?php

use Illuminate\Database\Seeder;

class TurnsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('turns')->insert([
            'turn_name' => '1º Turno',
            'created_at' => Carbon\Carbon::now(),
            'updated_at' => Carbon\Carbon::now()
        ]);
        DB::table('turns')->insert([
            'turn_name' => '2º Turno',
            'created_at' => Carbon\Carbon::now(),
            'updated_at' => Carbon\Carbon::now()
        ]);
        DB::table('turns')->insert([
            'turn_name' => '3º Turno',
            'created_at' => Carbon\Carbon::now(),
            'updated_at' => Carbon\Carbon::now()
        ]);
    }
}
