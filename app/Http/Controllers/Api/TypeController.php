<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Resources\TypeResource;
use TrocaTroca\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $types = Type::paginate(10);
        return TypeResource::collection($types);
    }

    /**
     * Display the specified resource.
     *
     * @param Type $type
     * @return TypeResource
     */
    public function show(Type $type)
    {
        return new TypeResource($type);
    }
}
