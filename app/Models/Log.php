<?php

namespace TrocaTroca\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Mnabialek\LaravelEloquentFilter\Traits\Filterable;

class Log extends Model
{
    use Filterable;

    protected $fillable = ['user_id', 'date', 'action'];

    /**
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
