<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Resources\GroupResource;
use TrocaTroca\Models\Group;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $groups = Group::paginate(10);
        return GroupResource::collection($groups);
    }

    /**
     * Display the specified resource.
     *
     * @param Group $group
     * @return GroupResource
     */
    public function show(Group $group)
    {
        return new GroupResource($group);
    }
}
