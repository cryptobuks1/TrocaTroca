<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use TrocaTroca\Models\Exchange;

class ExchangesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Exchange::class, 200)->create([
            'status_id' => 2
        ]);
        for ($i = 1; $i <= 200; $i++) {
            factory(Exchange::class)->create([
                'status_id' => 5,
                'date_confirmation' => Carbon::now()->addDays(random_int(1, 365))
            ]);
        }
        for ($i = 1; $i <= 200; $i++) {
            factory(Exchange::class)->create([
                'status_id' => 1,
                'date_confirmation' => Carbon::now()->addDays(random_int(1, 365)),
                'date_autorization' => Carbon::now()->addDays(random_int(1, 365))
            ]);
        }
    }
}
