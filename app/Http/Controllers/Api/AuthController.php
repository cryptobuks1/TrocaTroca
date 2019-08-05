<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Resources\UserResource;
use Carbon;
use TrocaTroca\Firebase\Auth as FirebaseAuth;
use TrocaTroca\Models\UserProfile;
use TrocaTroca\Rules\FirebaseTokenVerification;

class AuthController extends Controller
{
    use AuthenticatesUsers;

    /**
     * @return string
     */
    public function username()
    {
        return 'key';
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);
        $credentials = $this->credentials($request);
        $token = \JWTAuth::attempt($credentials);
        \DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon\Carbon::now(),
            'action' => "Usuário logou"
        ]);
        return $this->responseToken($token);
    }

    /**
     * @param Request $request
     * @return array|JsonResponse
     * @throws ValidationException
     */
    public function loginFirebase(Request $request)
    {
        $this->validate($request, [
            'required',
            'token' => new FirebaseTokenVerification()
        ]);

        /** @var FirebaseAuth $firebaseAuth */
        $firebaseAuth = app(FirebaseAuth::class);
        $user = $firebaseAuth->user($request->token);
        $profile = UserProfile::where('phone_number', $user->phoneNumber)->first();
        $token = null;
        if ($profile) {
            $token = \Auth::guard('api')->login($profile->user);
        }
        return $this->responseToken($token);
    }

    /**
     * @return JsonResponse
     */
    public function logout()
    {
        \DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon\Carbon::now(),
            'action' => "Usuário saiu"
        ]);
        \Auth::guard('api')->logout();
        return response()->json([], 204);
    }

    /**
     * @return UserResource
     */
    public function me()
    {
        $user = \Auth::guard('api')->user();
        return new UserResource($user);
    }

    /**
     * @return array
     */
    public function refresh()
    {
        $token = \Auth::guard('api')->refresh();
        return ['token' => $token];
    }

    /**
     * @param $token
     * @return array|JsonResponse
     */
    private function responseToken($token)
    {
        return $token ?
            ['token' => $token] :
            response()->json([
                'error' => \Lang::get('auth.failed')
            ], 400);
    }
}
