<?php

namespace TrocaTroca\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SectorResource extends JsonResource
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
            'sector_name' => $this->sector_name,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
