<?php

namespace TrocaTroca\Http\Controllers\Api;

use DB;
use Illuminate\Http\Request;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Resources\ChartStatusResource;

class ChartController extends Controller
{
    /**
     * @return mixed
     */
    public function chartStatus()
    {
        $dataStatus = DB::table('exchanges')
            ->select('status_id', 'status_name', DB::raw('COUNT(exchanges.id) as exchanges_count'))
            ->join('statuses', 'statuses.id', '=', 'exchanges.status_id')
            ->groupBy('status_id')
            ->get();

        return $dataStatus;
    }

    public function chartGroupsCadastradas()
    {
        $dataGroups1 = DB::table('exchanges')
            ->select('group1_id', 'group_name', DB::raw('COUNT(exchanges.id) as exchanges_count'))
            ->join('groups', 'groups.id', '=', 'exchanges.group1_id')
            ->where('status_id', 2)
            ->groupBy('group1_id')
            ->get();

        /*$dataGroups2 = DB::table('exchanges')
            ->select('group2_id', 'group_name', DB::raw('COUNT(exchanges.id) as exchanges_count'))
            ->join('groups', 'groups.id', '=', 'exchanges.group2_id')
            ->where('status_id', 2)
            ->union($dataGroups1)
            ->groupBy('group2_id')
            ->get();*/

        return $dataGroups1;
    }

    public function chartGroupsConfirmed()
    {
        $dataGroupsConfirmed1 = DB::table('exchanges')
            ->select('group1_id', 'group_name', DB::raw('COUNT(exchanges.id) as exchanges_count'))
            ->join('groups', 'groups.id', '=', 'exchanges.group1_id')
            ->where('status_id', 5)
            ->groupBy('group1_id')
            ->get();

        /*$dataGroupsConfirmed2 = DB::table('exchanges')
            ->select('group2_id', 'group_name', DB::raw('COUNT(exchanges.id) as exchanges_count'))
            ->join('groups', 'groups.id', '=', 'exchanges.group2_id')
            ->where('status_id', 5)
            ->union($dataGroupsConfirmed1)
            ->groupBy('group2_id')
            ->get();*/

        return $dataGroupsConfirmed1;
    }

    public function cardUsers()
    {
        $dataUsersCount = DB::table('users')
            ->select( DB::raw('COUNT(users.id) as users_count'))
            ->get();

        return $dataUsersCount;
    }

    public function cardUnits()
    {
        $dataUnitsCount = DB::table('units')
            ->select( DB::raw('COUNT(units.id) as units_count'))
            ->get();

        return $dataUnitsCount;
    }

    public function cardSectors()
    {
        $dataSectorsCount = DB::table('sectors')
            ->select( DB::raw('COUNT(sectors.id) as sectors_count'))
            ->get();

        return $dataSectorsCount;
    }
}
