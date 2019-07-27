<?php

namespace TrocaTroca\Http\Controllers\Api;

use Carbon\Carbon;
use DB;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Requests\UnitSectorRequest;
use TrocaTroca\Http\Resources\UnitSectorResource;
use TrocaTroca\Models\Sector;
use TrocaTroca\Models\Unit;

class UnitSectorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Unit $unit
     * @return UnitSectorResource
     */
    public function index(Unit $unit)
    {
        //return $unit->sectors();
        return new UnitSectorResource($unit);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UnitSectorRequest $request
     * @param Unit $unit
     * @return Response
     */
    public function store(UnitSectorRequest $request, Unit $unit)
    {
        $changed = $unit->sectors()->sync($request->sectors);
        $sectorsAttachedId = $changed['attached'];
        /** @var Collection $sectors */
        $sectors = Sector::whereIn('id', $sectorsAttachedId)->get();
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Cadastrou Setores da Unidade"
        ]);
        return $sectors->count() ? response()->json(new UnitSectorResource($unit), 201) : $sectors;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Unit $unit
     * @param Sector $sector
     * @return Response
     */
    public function destroy(Unit $unit, Sector $sector)
    {
        $unit->sectors()->detach($sector->id);
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Removeu Setores da Unidade"
        ]);
        return response()->json([], 204);
    }
}
