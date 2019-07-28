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

class UserFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search'];

    protected $simpleSorts = ['id', 'key', 'username', 'unit_name', 'sector_name', 'created_at'];

    protected function applySearch($value)
    {
        $this->query->where('key', 'LIKE', "%$value%")
                        ->orWhere('username', 'LIKE', "%$value%")
                        ->orWhere('unit_name', 'LIKE', "%$value%")
                        ->orWhere('sector_name', 'LIKE', "%$value%");
    }

    protected function applySortUnitName($order)
    {
        $this->query->orderBy('units.unit_name', $order);
    }

    protected function applySortSectorName($order)
    {
        $this->query->orderBy('sectors.sector_name', $order);
    }

    protected function applySortCreatedAt($order)
    {
        $this->query->orderBy('users.created_at', $order);
    }

    /**
     * @param Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply($query)
    {
        $query = $query
            ->select('users.*')
            ->join('units', 'units.id', '=', 'users.unit_id')
            ->join('sectors', 'sectors.id', '=', 'users.sector_id');
        return parent::apply($query);
    }

}