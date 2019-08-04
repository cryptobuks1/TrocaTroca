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
        $dataGroupsTotal = DB::table('views_exchanges_groups_total')
            ->select(  'group_name', 'exchanges_count')
            ->get();

        return $dataGroupsTotal;
    }

    public function chartGroupsConfirmed()
    {
        $dataGroupsTotalConfirmed = DB::table('views_exchanges_groups_confirmed_total')
            ->select(  'group_name', 'exchanges_count')
            ->get();

        return $dataGroupsTotalConfirmed;
    }

    public function chartGroupsConclusion()
    {
        $dataGroupsTotalConclusion = DB::table('views_exchanges_groups_conclusion_total')
            ->select(  'group_name', 'exchanges_count')
            ->get();

        return $dataGroupsTotalConclusion;
    }

    public function chartGroupsAuthorized()
    {
        $dataGroupsTotalAuthorized = DB::table('views_exchanges_groups_authorized_total')
            ->select(  'group_name', 'exchanges_count')
            ->get();

        return $dataGroupsTotalAuthorized;
    }

    public function chartUnitsCadastradas()
    {
        $dataUnits = DB::table('exchanges')
            ->select('unit_id', 'unit_name', DB::raw('COUNT(exchanges.id) as exchanges_count'))
            ->join('units', 'units.id', '=', 'exchanges.unit_id')
            ->where('status_id', 2)
            ->groupBy('unit_id')
            ->get();

        return $dataUnits;
    }

    public function chartUnitsAuthorized()
    {
        $dataUnitsAuthorized = DB::table('exchanges')
            ->select('unit_id', 'unit_name', DB::raw('COUNT(exchanges.id) as exchanges_count'))
            ->join('units', 'units.id', '=', 'exchanges.unit_id')
            ->where('status_id', 1)
            ->groupBy('unit_id')
            ->get();

        return $dataUnitsAuthorized;
    }

    public function chartUnitsConfirmed()
    {
        $dataUnitsConfirmed = DB::table('exchanges')
            ->select('unit_id', 'unit_name', DB::raw('COUNT(exchanges.id) as exchanges_count'))
            ->join('units', 'units.id', '=', 'exchanges.unit_id')
            ->where('status_id', 5)
            ->groupBy('unit_id')
            ->get();

        return $dataUnitsConfirmed;
    }

    public function chartDatesCadastradas()
    {
        $dataMonths = DB::table('views_exchanges_months_cadastradas_total')
            ->select( 'data', 'exchanges_count')
            ->get();

        return $dataMonths;
    }

    public function chartDatesAuthorized()
    {
        $dataMonthsAuthorized = DB::table('views_exchanges_months_authorized_total')
            ->select( 'data', 'exchanges_count')
            ->get();

        return $dataMonthsAuthorized;
    }

    public function chartDatesConfirmed()
    {
        $dataDatesConfirmed = DB::table('views_exchanges_months_confirmed_total')
            ->select( 'data', 'exchanges_count')
            ->get();

        return $dataDatesConfirmed;
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
