<?php

namespace TrocaTroca\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Mnabialek\LaravelEloquentFilter\Traits\Filterable;

class Sector extends Model
{
    use SoftDeletes;
    use Filterable;

    protected $dates = ['deleted_at'];
    protected $fillable = ['sector_name'];

    /**
     * @return BelongsToMany
     */
    public function units()
    {
        return $this->belongsToMany(Unit::class);
    }
}
