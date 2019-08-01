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

        /*$dataStatus = DB::table('exchanges')
            ->select( DB::raw('COUNT(id) as exchanges_count'))
            ->groupBy('status_id')
            ->get();*/

        //return  ChartStatusResource::collection($dataStatus);
        return $dataStatus;
    }
}
