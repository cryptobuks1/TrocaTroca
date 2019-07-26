<?php

namespace TrocaTroca\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UnitCreateRequest extends FormRequest
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
            'unit_name' => 'required|max:30|unique:units,unit_name',
            'city_id' => 'required'
        ];
    }
}
