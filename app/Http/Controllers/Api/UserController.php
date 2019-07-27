<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use TrocaTroca\Events\UserCreatedEvent;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Requests\UserCreateRequest;
use TrocaTroca\Http\Resources\UserResource;
use TrocaTroca\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $users = User::paginate(10);
        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UserCreateRequest $request
     * @return User $user
     */
    public function store(UserCreateRequest $request)
    {
        $user = User::create($request->all());
        event(new UserCreatedEvent($user));
        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return UserResource
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserCreateRequest $request
     * @param User $user
     * @return Response
     */
    public function update(UserCreateRequest $request, User $user)
    {
        $user->fill($request->all());
        $user->save();
        return response()->json([], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return Response
     * @throws \Exception
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([], 204);
    }

    /**
     * @param User $user
     * @return JsonResponse
     */
    public function restore(User $user)
    {
        $user->restore();
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
