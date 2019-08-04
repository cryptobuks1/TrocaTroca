<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExchangesMonthsConfirmedTotalViews extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE VIEW views_exchanges_months_confirmed_total AS
            (
            SELECT date, MONTH(date) as data, COUNT(exchanges.id) as exchanges_count
            FROM exchanges
            WHERE status_id = 5
            GROUP BY data
            )
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS views_exchanges_months_confirmed_total');
    }
}
