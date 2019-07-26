<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'api', 'as' => 'api.'], function () {
    Route::patch('cities/{city}/restore', 'CityController@restore');
    Route::patch('sectors/{srctor}/restore', 'SectorController@restore');
    Route::patch('units/{unit}/restore', 'UnitController@restore');
    Route::resource('states', 'StateController', ['only' => ['index', 'show']]);
    Route::resource('cities', 'CityController', ['except' => ['create', 'edit']]);
    Route::resource('sectors', 'SectorController', ['except' => ['create', 'edit']]);
    Route::resource('units', 'UnitController', ['except' => ['create', 'edit']]);
});
