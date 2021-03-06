<?php

namespace TrocaTroca\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Mnabialek\LaravelEloquentFilter\Traits\Filterable;

class Unit extends Model
{
    use SoftDeletes;
    use Filterable;

    protected $dates = ['deleted_at'];
    protected $fillable = ['unit_name', 'city_id'];

    /**
     * @return mixed
     */
    public function city()
    {
        return $this->belongsTo(City::class)->withTrashed();
    }

    /**
     * @return BelongsToMany
     */
    public function sectors()
    {
        return $this->belongsToMany(Sector::class);
    }
}
