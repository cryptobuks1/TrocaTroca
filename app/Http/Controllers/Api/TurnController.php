<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Resources\TurnResource;
use TrocaTroca\Models\Turn;
use Illuminate\Http\Request;

class TurnController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $turns = Turn::paginate(10);
        return TurnResource::collection($turns);
    }

    /**
     * Display the specified resource.
     *
     * @param Turn $turn
     * @return TurnResource
     */
    public function show(Turn $turn)
    {
        return new TurnResource($turn);
    }
}
