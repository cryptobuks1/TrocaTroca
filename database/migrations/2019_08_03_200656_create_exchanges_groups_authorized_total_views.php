<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExchangesGroupsAuthorizedTotalViews extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE VIEW views_exchanges_groups_authorized_total AS
            select group_name, sum(exchanges_count) as exchanges_count
            from
            (select * 
            from views_exchanges_groups_authorized 
            union 
            select * 
            from views_exchanges_groups2_authorized 
            GROUP BY groups
            ) as ex
            group by group_name
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS views_exchanges_groups_authorized_total');
    }
}
