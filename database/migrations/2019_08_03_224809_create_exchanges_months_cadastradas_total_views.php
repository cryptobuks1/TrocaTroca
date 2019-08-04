<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExchangesMonthsCadastradasTotalViews extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE VIEW views_exchanges_months_cadastradas_total AS
            (
            SELECT date, MONTH(date) as data, COUNT(exchanges.id) as exchanges_count
            FROM exchanges
            WHERE status_id = 2
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
        DB::statement('DROP VIEW IF EXISTS views_exchanges_months_cadastradas_total');
    }
}
