<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Requests\SectorRequest;
use TrocaTroca\Http\Resources\SectorResource;
use TrocaTroca\Models\Sector;
use Illuminate\Http\Request;

class SectorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $sectors = Sector::paginate(10);
        return SectorResource::collection($sectors);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param SectorRequest $request
     * @return Response
     */
    public function store(SectorRequest $request)
    {
        $sector = Sector::create($request->all());
        return $sector;
    }

    /**
     * Display the specified resource.
     *
     * @param Sector $sector
     * @return SectorResource
     */
    public function show(Sector $sector)
    {
        return new SectorResource($sector);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param SectorRequest $request
     * @param Sector $sector
     * @return Response
     */
    public function update(SectorRequest $request, Sector $sector)
    {
        $sector->fill($request->all());
        $sector->save();
        return response()->json([], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Sector $sector
     * @return Response
     * @throws \Exception
     */
    public function destroy(Sector $sector)
    {
        $sector->delete();
        return response()->json([], 204);
    }

    /**
     * @param Sector $sector
     * @return JsonResponse
     */
    public function restore(Sector $sector)
    {
        $sector->restore();
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
