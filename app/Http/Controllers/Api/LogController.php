<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Filters\LogFilter;
use TrocaTroca\Http\Requests\LogRequest;
use TrocaTroca\Http\Resources\LogResource;
use TrocaTroca\Models\Log;
use Illuminate\Http\Request;

class LogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $filter = app(LogFilter::class);
        $filterQuery = Log::with('user')->filtered($filter);
        $logs = $filterQuery->paginate(5);
        //$logs = Log::paginate(5);
        return LogResource::collection($logs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param LogRequest $request
     * @return Response
     */
    public function store(LogRequest $request)
    {
        $log = Log::create($request->all());
        return $log;
    }

    /**
     * Display the specified resource.
     *
     * @param  \TrocaTroca\Models\Log  $log
     * @return LogResource
     */
    public function show(Log $log)
    {
        return new LogResource($log);
    }
}
