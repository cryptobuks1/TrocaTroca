<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Resources\StateResource;
use TrocaTroca\Models\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $states = State::all();
        return StateResource::collection($states);
    }

    /**
     * Display the specified resource.
     *
     * @param  \TrocaTroca\Models\State  $state
     * @return StateResource
     */
    public function show(State $state)
    {
        return new StateResource($state);
    }
}
