<?php

namespace TrocaTroca\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Mnabialek\LaravelEloquentFilter\Traits\Filterable;

class City extends Model
{
    use SoftDeletes;
    use Filterable;

    protected $dates = ['deleted_at'];
    protected $fillable = ['city_name', 'state_id'];

    /**
     * @return BelongsTo
     */
    public function state()
    {
        return $this->belongsTo(State::class);
    }

    /**
     * @return HasMany
     */
    public function unit()
    {
        return $this->hasMany(Unit::class);
    }
}
