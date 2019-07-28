<?php
/**
 * Created by PhpStorm.
 * User: Herval
 * Date: 28/07/2019
 * Time: 13:12
 */

namespace TrocaTroca\Http\Filters;


use Illuminate\Database\Query\Builder;
use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

class CityFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search'];

    protected $simpleSorts = ['id', 'city_name', 'state_name', 'created_at'];

    protected function applySearch($value)
    {
        $this->query->where('city_name', 'LIKE', "%$value%")
                        ->orWhere('state_name', 'LIKE', "%$value%");
    }

    protected function applySortStateName($order)
    {
        $this->query->orderBy('states.state_name', $order);
    }

    protected function applySortCreatedAt($order)
    {
        $this->query->orderBy('cities.created_at', $order);
    }

    /**
     * @param Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply($query)
    {
        $query = $query
            ->select('cities.*')
            ->join('states', 'states.id', '=', 'cities.state_id');
        return parent::apply($query);
    }

}