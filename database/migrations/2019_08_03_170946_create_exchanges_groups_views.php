<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExchangesGroupsViews extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE VIEW views_exchanges_groups AS
            (
            SELECT group1_id as groups, group_name, COUNT(exchanges.id) as exchanges_count
            FROM exchanges INNER JOIN groups g on exchanges.group1_id = g.id
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
        DB::statement('DROP VIEW IF EXISTS views_exchanges_groups');
    }
}
