<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExchangesGroups2Views extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE VIEW views_exchanges_groups2 AS
            (
            SELECT group2_id as groups, group_name, COUNT(exchanges.id) as exchanges_count
            FROM exchanges INNER JOIN groups g on exchanges.group2_id = g.id
            WHERE status_id = 2
            GROUP BY groups
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
        DB::statement('DROP VIEW IF EXISTS views_exchanges_groups2');
    }
}
