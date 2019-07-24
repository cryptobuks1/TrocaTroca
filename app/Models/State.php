<?php

namespace TrocaTroca\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class State extends Model
{
    protected $fillable = ['state_name', 'initials'];

    /**
     * @return HasMany
     */
    public function city()
    {
        return $this->hasMany(City::class);
    }
}
