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

class ExchangeFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search'];

    protected $simpleSorts = ['id', 'group_name', 'username', 'unit_name', 'sector_name', 'date'];

    protected function applySearch($value)
    {
        $this->query->where('group_name', 'LIKE', "%$value%")
                        ->orWhere('username', 'LIKE', "%$value%")
                        ->orWhere('unit_name', 'LIKE', "%$value%")
                        ->orWhere('sector_name', 'LIKE', "%$value%");
    }

    protected function applySortGroupName($order)
    {
        $this->query->orderBy('groups.group_name', $order);
    }

    protected function applySortUsername($order)
    {
        $this->query->orderBy('users.username', $order);
    }

    protected function applySortUnitName($order)
    {
        $this->query->orderBy('units.unit_name', $order);
    }

    protected function applySortSectorName($order)
    {
        $this->query->orderBy('sectors.sector_name', $order);
    }

    protected function applySortDate($order)
    {
        $this->query->orderBy('exchange.date', $order);
    }

    /**
     * @param Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply($query)
    {
        $query = $query
            ->select('exchanges.*')
            ->join('groups', function ($join) {
                $join->on('groups.id', '=', 'exchanges.group1_id')->orOn('groups.id', '=',  'exchanges.group2_id');
            })
            ->join('users', function ($join) {
                $join->on('users.id', '=', 'exchanges.user1_id')->orOn('users.id', '=',  'exchanges.user2_id');
            })
            ->join('units', 'units.id', '=', 'exchanges.unit_id')
            ->join('sectors', 'sectors.id', '=', 'exchanges.sector_id');
        return parent::apply($query);
    }

}