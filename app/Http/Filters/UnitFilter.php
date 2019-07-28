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

class UnitFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search'];

    protected $simpleSorts = ['id', 'unit_name', 'city_name', 'created_at'];

    protected function applySearch($value)
    {
        $this->query->where('unit_name', 'LIKE', "%$value%")
                        ->orWhere('city_name', 'LIKE', "%$value%");
    }

    protected function applySortCityName($order)
    {
        $this->query->orderBy('cities.city_name', $order);
    }

    protected function applySortCreatedAt($order)
    {
        $this->query->orderBy('units.created_at', $order);
    }

    /**
     * @param Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply($query)
    {
        $query = $query
            ->select('units.*')
            ->join('cities', 'cities.id', '=', 'units.city_id');
        return parent::apply($query);
    }

}