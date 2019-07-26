<?php

namespace TrocaTroca\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UnitResource extends JsonResource
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
            'unit_name' => $this->unit_name,
            'city' => new CityResource($this->city),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
