<?php

namespace TrocaTroca\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UnitSectorResource extends JsonResource
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
            'unit' => new UnitResource($this->resource),
            'sectors' => SectorResource::collection($this->resource->sectors)
        ];
    }
}
