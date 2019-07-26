<?php

namespace TrocaTroca\Http\Controllers\Api;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use TrocaTroca\Http\Controllers\Controller;
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

class ExchangeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        //$filter = app(ExchangeFilter::class);
        //$filterQuery = Exchange::filtered($filter);
        //$exchanges = $filter->hasFilterParamter() ? $filterQuery->get() : $filterQuery->paginate(10);
        $exchanges = Exchange::paginate(10);
        return ExchangeResource::collection($exchanges);
    }
    /**
     * @return AnonymousResourceCollection
     */
    public function indexCadastro()
    {
        $exchanges = Exchange::where('status_id', 2)->paginate(10);
        return ExchangeResource::collection($exchanges);
    }
    /**
     * @return AnonymousResourceCollection
     */
    public function indexConfirm()
    {
        $exchanges = Exchange::where('status_id', 5)->paginate(10);
        return ExchangeResource::collection($exchanges);
    }
    /**
     * @return AnonymousResourceCollection
     */
    public function indexAuthorize()
    {
        $exchanges = Exchange::where('status_id', 1)->paginate(10);
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
        return new ExchangeResource($exchange);
    }
}
