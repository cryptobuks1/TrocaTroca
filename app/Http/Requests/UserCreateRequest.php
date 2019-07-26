<?php

namespace TrocaTroca\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'key' => 'required|max:4|unique:users,key',
            'username' => 'required|max:30',
            'email' => 'required|max:255|email|unique:users,email',
            'unit_id' => 'required',
            'sector_id' => 'required',
            'password' => 'required|min:6|max:16'
        ];
    }
}
