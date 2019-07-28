<?php
/**
 * Created by PhpStorm.
 * User: Herval
 * Date: 28/07/2019
 * Time: 13:12
 */

namespace TrocaTroca\Http\Filters;


use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

class SectorFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search'];

    //protected $simpleFilters = ['search', 'interval'];

    protected $simpleSorts = ['id', 'sector_name', 'created_at'];

    protected function applySearch($value)
    {
        $this->query->where('sector_name', 'LIKE', "%$value%");
                        //->orWhere('city_id', '=', "%$value%");
    }

    /*protected function applyInterval($value)
    {

    }*/
}