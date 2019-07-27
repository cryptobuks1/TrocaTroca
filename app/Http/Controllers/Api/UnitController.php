<?php

namespace TrocaTroca\Http\Controllers\Api;

use Carbon\Carbon;
use DB;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Requests\UnitCreateRequest;
use TrocaTroca\Http\Resources\UnitResource;
use TrocaTroca\Models\Unit;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $units = Unit::paginate(10);
        return UnitResource::collection($units);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UnitCreateRequest $request
     * @return Response
     */
    public function store(UnitCreateRequest $request)
    {
        $unit = Unit::create($request->all());
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Cadastrou Unidade"
        ]);
        return $unit;
    }

    /**
     * Display the specified resource.
     *
     * @param Unit $unit
     * @return UnitResource
     */
    public function show(Unit $unit)
    {
        return new UnitResource($unit);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UnitCreateRequest $request
     * @param Unit $unit
     * @return Response
     */
    public function update(UnitCreateRequest $request, Unit $unit)
    {
        $unit->fill($request->all());
        $unit->save();
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Atualizou Unidade"
        ]);
        return response()->json([], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Unit $unit
     * @return Response
     * @throws \Exception
     */
    public function destroy(Unit $unit)
    {
        $unit->delete();
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Removeu Unidade"
        ]);
        return response()->json([], 204);
    }

    /**
     * @param Unit $unit
     * @return JsonResponse
     */
    public function restore(Unit $unit)
    {
        $unit->restore();
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Restaurou Unidade"
        ]);
        return response()->json([], 204);
    }

    /**
     * @param Request $request
     * @param Builder $query
     * @return Builder
     */
    private function onlyTrashedIfRequested(Request $request, Builder $query)
    {
        if ($request->get('trashed') == 1) {
            $query = $query->onlyTrashed();
        }
        return $query;
    }
}
