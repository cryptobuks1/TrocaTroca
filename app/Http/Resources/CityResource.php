<?php

namespace TrocaTroca\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'city_name' => $this->city_name,
            'state' => new StateResource($this->state),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
