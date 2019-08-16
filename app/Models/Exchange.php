<?php

namespace TrocaTroca\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Mnabialek\LaravelEloquentFilter\Traits\Filterable;

class Exchange extends Model
{
    use Notifiable;
    use Filterable;

    protected $fillable = [
        'unit_id',
        'sector_id',
        'user1_id',
        'group1_id',
        'user2_id',
        'group2_id',
        'turn_id',
        'type1_id',
        'type2_id',
        'status_id',
        'date',
        'date_cadastro',
        'date_confirmation',
        'date_autorization',
        'date_declination',
        'date_cancelation',
        'date_conclusion',
        'date_pending'
    ];
    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
    public function sector()
    {
        return $this->belongsTo(Sector::class);
    }
    public function user1()
    {
        return $this->belongsTo(User::class);
    }
    public function user2()
    {
        return $this->belongsTo(User::class);
    }
    public function group1()
    {
        return $this->belongsTo(Group::class);
    }
    public function group2()
    {
        return $this->belongsTo(Group::class);
    }
    public function turn()
    {
        return $this->belongsTo(Turn::class);
    }
    public function type1()
    {
        return $this->belongsTo(Type::class);
    }
    public function type2()
    {
        return $this->belongsTo(Type::class);
    }
    public function status()
    {
        return $this->belongsTo(Status::class);
    }
    public function statuses()
    {
        return $this->belongsTo(Status::class);
    }
}
