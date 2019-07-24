<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Requests\CityCreateRequest;
use TrocaTroca\Http\Requests\CityUpdateRequest;
use TrocaTroca\Http\Resources\CityResource;
use TrocaTroca\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $cities = City::paginate(10);
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
    public function update(CityUpdateRequest $request, City $city)
    {
        $city->fill($request->all());
        $city->save();
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
        return response()->json([], 204);
    }

    /**
     * @param City $city
     * @return JsonResponse
     */
    public function restore(City $city)
    {
        $city->restore();
        return response()->json([], 204);
    }
}
