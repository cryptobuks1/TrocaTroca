<?php

namespace TrocaTroca\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExchangeResource extends JsonResource
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
            'unit' => new UnitResource($this->unit),
            'sector' => new SectorResource($this->sector),
            'user1' => new UserResource($this->user1),
            'group1' => new GroupResource($this->group1),
            'user2' => new UserResource($this->user2),
            'group2' => new GroupResource($this->group2),
            'date' => $this->date,
            'turn' => new TurnResource($this->turn),
            'type1' => new TypeResource($this->type1),
            'type2' => new TypeResource($this->type2),
            'date_cadastro' => $this->date_cadastro,
            'status' => new StatusResource($this->status),
            'date_confirmation' => $this->date_confirmation,
            'date_autorization' => $this->date_autorization,
            'date_declination' => $this->date_declination,
            'date_cancelation' => $this->date_cancelation,
            'date_conclusion' => $this->date_conclusion,
            'date_pending' => $this->date_pending,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
