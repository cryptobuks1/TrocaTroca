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
    Route::name('login')->post('login', 'AuthController@login');
    Route::name('login_vendor')->post('login_vendor', 'AuthController@loginFirebase');
    Route::name('refresh')->post('refresh', 'AuthController@refresh');
    Route::resource('customers', 'CustomerController', ['only' => ['store']]);
    Route::group(['middleware' => 'auth:api', 'jwt.refresh'], function () {
        Route::name('logout')->post('logout', 'AuthController@logout');
        Route::name('me')->get('me', 'AuthController@me');
        Route::patch('cities/{city}/restore', 'CityController@restore');
        Route::patch('sectors/{srctor}/restore', 'SectorController@restore');
        Route::patch('units/{unit}/restore', 'UnitController@restore');
        Route::patch('users/{user}/restore', 'UserController@restore');
        Route::patch('exchanges/{exchange}/updateConfirm', 'ExchangeController@updateConfirm');
        Route::patch('exchanges/{exchange}/updateAuthorize', 'ExchangeController@updateAuthorize');
        Route::patch('exchanges/{exchange}/updateCancel', 'ExchangeController@updateCancel');
        Route::patch('exchanges/{exchange}/updateConclusion', 'ExchangeController@updateConclusion');
        Route::patch('exchanges/{exchange}/updatePending', 'ExchangeController@updatePending');
        Route::patch('exchanges/{exchange}/updateDecline', 'ExchangeController@updateDecline');
        Route::get('exchanges/cadastradas', 'ExchangeController@indexCadastro');
        Route::get('exchanges/confirm', 'ExchangeController@indexConfirm');
        Route::get('exchanges/authorize', 'ExchangeController@indexAuthorize');
        Route::get('cities/all', 'CityController@indexAll');
        Route::get('sectors/all', 'SectorController@indexAll');
        Route::get('units/all', 'UnitController@indexAll');
        Route::get('users/all', 'UserController@indexAll');
        Route::resource('states', 'StateController', ['only' => ['index', 'show']]);
        Route::resource('cities', 'CityController', ['except' => ['create', 'edit']]);
        Route::resource('sectors', 'SectorController', ['except' => ['create', 'edit']]);
        Route::resource('units', 'UnitController', ['except' => ['create', 'edit']]);
        Route::resource('units.sectors', 'UnitSectorController', ['only' => ['index', 'store', 'destroy']]);
        Route::resource('users', 'UserController', ['except' => ['create', 'edit']]);
        Route::resource('groups', 'GroupController', ['only' => ['index', 'show']]);
        Route::resource('turns', 'TurnController', ['only' => ['index', 'show']]);
        Route::resource('types', 'TypeController', ['only' => ['index', 'show']]);
        Route::resource('statuses', 'StatusController', ['only' => ['index', 'show']]);
        Route::resource('exchanges', 'ExchangeController', ['only' => ['index', 'store', 'show']]);
        Route::resource('logs', 'LogController', ['only' => ['index', 'store', 'show']]);
        Route::get('charts/status', 'ChartController@chartStatus');
        Route::get('charts/groups_cadastradas', 'ChartController@chartGroupsCadastradas');
        Route::get('charts/groups_confirmed', 'ChartController@chartGroupsConfirmed');
        Route::get('charts/groups_conclusion', 'ChartController@chartGroupsConclusion');
        Route::get('charts/groups_authorized', 'ChartController@chartGroupsAuthorized');
        Route::get('charts/units_cadastradas', 'ChartController@chartUnitsCadastradas');
        Route::get('charts/units_authorized', 'ChartController@chartUnitsAuthorized');
        Route::get('charts/units_confirmed', 'ChartController@chartUnitsConfirmed');
        Route::get('charts/dates_cadastradas', 'ChartController@chartDatesCadastradas');
        Route::get('charts/dates_authorized', 'ChartController@chartDatesAuthorized');
        Route::get('charts/dates_confirmed', 'ChartController@chartDatesConfirmed');
        Route::get('cards/users', 'ChartController@cardUsers');
        Route::get('cards/units', 'ChartController@cardUnits');
        Route::get('cards/sectors', 'ChartController@cardSectors');
    });
});
