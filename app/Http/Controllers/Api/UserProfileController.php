<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Http\Request;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Resources\UserResource;
use TrocaTroca\Firebase\Auth as FirebaseAuth;

class UserProfileController extends Controller
{
    /**
     * @param Request $request
     * @return UserResource
     */
    public function update(Request $request)
    {
        $data = $request->all();
        if ($request->has('token')) {
            $token = $request->token;
            $data["phone_number"] = $this->getPhoneNumber($token);
        }
        $data['photo'] = $data['photo'] ?? null;
        $user = \Auth::guard('api')->user();
        $user->updateWithProfile($data);
        return new UserResource($user);
    }
    /**
     * @param $token
     * @return string
     */
    private function getPhoneNumber($token)
    {
        $firebaseAuth = app(FirebaseAuth::class);
        return $firebaseAuth->phoneNumber($token);
    }
}
