<?php

namespace TrocaTroca\Http\Controllers\Api;

use Carbon\Carbon;
use DB;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use TrocaTroca\Events\ExchangeAuthorizedEvent;
use TrocaTroca\Events\ExchangeCanceledEvent;
use TrocaTroca\Events\ExchangeConfirmedEvent;
use TrocaTroca\Events\ExchangeCreatedEvent;
use TrocaTroca\Events\ExchangeDeclinedEvent;
use TrocaTroca\Http\Controllers\Controller;
use TrocaTroca\Http\Filters\ExchangeFilter;
use TrocaTroca\Http\Filters\ExchangeMobileFilter;
use TrocaTroca\Http\Requests\ExchangeAuthorizeRequest;
use TrocaTroca\Http\Requests\ExchangeCancelRequest;
use TrocaTroca\Http\Requests\ExchangeConclusionRequest;
use TrocaTroca\Http\Requests\ExchangeConfirmRequest;
use TrocaTroca\Http\Requests\ExchangeCreateRequest;
use TrocaTroca\Http\Requests\ExchangeDeclineRequest;
use TrocaTroca\Http\Requests\ExchangePendingRequest;
use TrocaTroca\Http\Resources\ExchangeResource;
use TrocaTroca\Models\Exchange;
use Illuminate\Http\Request;
use TrocaTroca\Notifications\ExchangeCreatedNotification;

class ExchangeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $filter = app(ExchangeFilter::class);
        $filterQuery = Exchange::with('user1', 'user2', 'unit', 'sector', 'group1', 'turn', 'type1', 'status')->filtered($filter);
        $exchanges = $filterQuery->paginate(15);
        //$exchanges = Exchange::paginate(10);
        return ExchangeResource::collection($exchanges);
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function indexAll()
    {
        $filter = app(ExchangeMobileFilter::class);
        //$filterQuery = Exchange::with('user1', 'user2', 'unit', 'sector', 'group1', 'turn', 'type1', 'status')->filtered($filter);
        $filterQuery = Exchange::filtered($filter);
        $exchanges = $filterQuery->paginate(15);
        //$exchanges = $filter->hasFilterParameter() ? $filterQuery->get() : $filterQuery->paginate(15);
        //$exchanges = Exchange::paginate(10);
        return ExchangeResource::collection($exchanges);
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function indexCadastro()
    {
        $filter = app(ExchangeMobileFilter::class);
        $filterQuery = Exchange::where('status_id', 2)->filtered($filter);
        $exchanges = $filterQuery->paginate(5);
        //$exchanges = Exchange::where('status_id', 2)->paginate(10);
        return ExchangeResource::collection($exchanges);
    }
    /**
     * @return AnonymousResourceCollection
     */
    public function indexConfirm()
    {
        $filter = app(ExchangeFilter::class);
        $filterQuery = Exchange::where('status_id', 5)->filtered($filter);
        $exchanges = $filterQuery->paginate(5);
        //$exchanges = Exchange::where('status_id', 5)->paginate(10);
        return ExchangeResource::collection($exchanges);
    }
    /**
     * @return AnonymousResourceCollection
     */
    public function indexAuthorize()
    {
        $filter = app(ExchangeFilter::class);
        $filterQuery = Exchange::where('status_id', 1)->filtered($filter);
        $exchanges = $filterQuery->paginate(5);
        //$exchanges = Exchange::where('status_id', 1)->paginate(10);
        return ExchangeResource::collection($exchanges);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param ExchangeCreateRequest $request
     * @return ExchangeResource
     */
    public function store(ExchangeCreateRequest $request)
    {
        $exchange = Exchange::create($request->all());
        event(new ExchangeCreatedEvent($exchange));
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Cadastrou Troca"
        ]);
        $exchange->refresh();

        return new ExchangeResource($exchange);
    }
    /**
     * Display the specified resource.
     *
     * @param Exchange $exchange
     * @return ExchangeResource
     */
    public function show(Exchange $exchange)
    {
        return new ExchangeResource($exchange);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param ExchangeConfirmRequest $request
     * @param Exchange $exchange
     * @return ExchangeResource
     */
    public function updateConfirm(ExchangeConfirmRequest $request, Exchange $exchange)
    {
        $input = $request->only(['status_id', 'date_confirmation']);
        $exchange->fill($input);
        $exchange->save();
        event(new ExchangeConfirmedEvent($exchange));
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Confirmou Troca"
        ]);
        return new ExchangeResource($exchange);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ExchangeAuthorizeRequest $request
     * @param Exchange $exchange
     * @return ExchangeResource
     */
    public function updateAuthorize(ExchangeAuthorizeRequest $request, Exchange $exchange)
    {
        $input = $request->only(['status_id', 'date_autorization']);
        $exchange->fill($input);
        $exchange->save();
        event(new ExchangeAuthorizedEvent($exchange));
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Autorizou Troca"
        ]);
        return new ExchangeResource($exchange);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param ExchangeDeclineRequest $request
     * @param Exchange $exchange
     * @return ExchangeResource
     */
    public function updateDecline(ExchangeDeclineRequest $request, Exchange $exchange)
    {
        $input = $request->only(['status_id', 'date_declination']);
        $exchange->fill($input);
        $exchange->save();
        event(new ExchangeDeclinedEvent($exchange));
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Rejeitou Troca"
        ]);
        return new ExchangeResource($exchange);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param ExchangeCancelRequest $request
     * @param Exchange $exchange
     * @return ExchangeResource
     */
    public function updateCancel(ExchangeCancelRequest $request, Exchange $exchange)
    {
        $input = $request->only(['status_id', 'date_cancelation']);
        $exchange->fill($input);
        $exchange->save();
        event(new ExchangeCanceledEvent($exchange));
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Cancelou Troca"
        ]);
        return new ExchangeResource($exchange);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param ExchangeConclusionRequest $request
     * @param Exchange $exchange
     * @return ExchangeResource
     */
    public function updateConclusion(ExchangeConclusionRequest $request, Exchange $exchange)
    {
        $input = $request->only(['status_id', 'date_conclusion']);
        $exchange->fill($input);
        $exchange->save();
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Concluiu Troca"
        ]);
        return new ExchangeResource($exchange);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param ExchangePendingRequest $request
     * @param Exchange $exchange
     * @return ExchangeResource
     */
    public function updatePending(ExchangePendingRequest $request, Exchange $exchange)
    {
        $input = $request->only(['status_id', 'date_pending']);
        $exchange->fill($input);
        $exchange->save();
        DB::table('logs')->insert([
            'user_id' => \Auth::getUser()->id,
            'date' => Carbon::now(),
            'action' => "Troca Ficou Pendente"
        ]);
        return new ExchangeResource($exchange);
    }
}
