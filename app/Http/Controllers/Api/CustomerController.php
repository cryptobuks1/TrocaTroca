<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Http\Request;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Firebase\Auth as FirebaseAuth;
use TrocaTroca\Http\Requests\CustomerRequest;
use TrocaTroca\Models\User;

class CustomerController extends Controller
{
    /**
     * @param CustomerRequest $request
     * @return array
     * @throws \Exception
     */
    public function store(CustomerRequest $request)
    {
        $data = $request->all();
        $token = $request->token;
        $data['phone_number'] = $this->getPhoneNumber($token);
        $data['photo'] = $data['photo'] ?? null;
        $user = User::createCustomer($data);
        return [
            'token' => \Auth::guard('api')->login($user)
        ];
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
