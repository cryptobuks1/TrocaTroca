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

class ExchangeMobileFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search', 'status'];

    protected $simpleSorts = ['id', 'group_name', 'username', 'unit_name', 'sector_name', 'date'];

    protected function applySearch($value)
    {
        $this->query
                        ->where('group1.group_name', 'LIKE', "%$value%")
                        ->orWhere('group2.group_name', 'LIKE', "%$value%")
                        ->orWhere('user1.username', 'LIKE', "%$value%")
                        ->orWhere('user2.username', 'LIKE', "%$value%")
                        ->orWhere('unit_name', 'LIKE', "%$value%")
                        ->orWhere('status_name', 'LIKE', "%$value%")
                        ->orWhere('sector_name', 'LIKE', "%$value%");
    }

    protected function applyStatuses($value)
    {
        if (!is_array($value) || count($value) === 0) {
            return;
        }

        $this->query->whereHas('status', function ($query) use ($value) {
            $query->whereIn('id', $value);
        });
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
        $this->query->orderBy('date', $order);
    }

    /**
     * @param Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply($query)
    {
        $query = $query
            ->select('exchanges.*')
            ->join('groups as group1', 'group1.id', '=', 'exchanges.group1_id')
            ->join('users as user1', 'user1.id', '=', 'exchanges.user1_id')
            ->join('groups as group2', 'group2.id', '=', 'exchanges.group2_id')
            ->join('users as user2', 'user2.id', '=', 'exchanges.user2_id')
            /*->join('groups', function ($join) {
                $join->on('groups.id', '=', 'exchanges.group1_id')->orOn('groups.id', '=',  'exchanges.group2_id');
            })
            ->join('users', function ($join) {
                $join->on('users.id', '=', 'exchanges.user1_id')->orOn('users.id', '=',  'exchanges.user2_id');
            })*/
            ->join('units', 'units.id', '=', 'exchanges.unit_id')
            ->join('sectors', 'sectors.id', '=', 'exchanges.sector_id')
            ->join('statuses', 'statuses.id', '=', 'exchanges.status_id');
        return parent::apply($query);
    }


    public function hasFilterParameter()
    {
        $contains = $this->parser->getFilters()->contains(function ($filter){
            return $filter->getField() === 'search' && !empty($filter->getValue());
        });

        return $contains;
    }

}