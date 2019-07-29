<?php

namespace TrocaTroca\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Filters\CityFilter;
use TrocaTroca\Http\Requests\CityCreateRequest;
use TrocaTroca\Http\Requests\CityUpdateRequest;
use TrocaTroca\Http\Resources\CityResource;
use TrocaTroca\Models\City;
use Illuminate\Http\Request;
use TrocaTroca\Models\Log;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $filter = app(CityFilter::class);
        $filterQuery = City::with('state')->filtered($filter);
        $cities = $filterQuery->paginate(5);
        //$cities = City::with('state')->paginate();
        return CityResource::collection($cities);
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function indexAll()
    {
        $cities = City::all();
        return CityResource::collection($cities);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CityCreateRequest $request
     * @return Response
     */
    public function store(CityCreateRequest $request)
    {
        $city = City::create($request->all());
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Cadastrou Cidade"
        ]);
        return $city;
    }

    /**
     * Display the specified resource.
     *
     * @param  \TrocaTroca\Models\City $city
     * @return CityResource
     */
    public function show(City $city)
    {
        return new CityResource($city);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CityUpdateRequest $request
     * @param  \TrocaTroca\Models\City $city
     * @return Response
     */
    public function update(CityCreateRequest $request, City $city)
    {
        $city->fill($request->all());
        $city->save();
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Atualizou Cidade"
        ]);
        return response()->json([], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \TrocaTroca\Models\City $city
     * @return Response
     * @throws \Exception
     */
    public function destroy(City $city)
    {
        $city->delete();
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Removeu Cidade"
        ]);
        return response()->json([], 204);
    }

    /**
     * @param City $city
     * @return JsonResponse
     */
    public function restore(City $city)
    {
        $city->restore();
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Restaurou Cidade"
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
