<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Resources\StatusResource;
use TrocaTroca\Models\Status;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $statuses = Status::paginate(10);
        return StatusResource::collection($statuses);
    }

    /**
     * Display the specified resource.
     *
     * @param Status $status
     * @return StatusResource
     */
    public function show(Status $status)
    {
        return new StatusResource($status);
    }
}
