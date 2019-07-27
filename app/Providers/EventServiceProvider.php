<?php

namespace TrocaTroca\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'TrocaTroca\Events\UserCreatedEvent' => [
            'TrocaTroca\Listeners\SendEmailToDefinedPassword',
        ],
        'TrocaTroca\Events\ExchangeCreatedEvent' => [
            'TrocaTroca\Listeners\SendEmailToExchangeCreatedUsers',
        ],
        'TrocaTroca\Events\ExchangeConfirmedEvent' => [
            'TrocaTroca\Listeners\SendEmailToExchangeComfirmedUser',
        ],
        'TrocaTroca\Events\ExchangeDeclinedEvent' => [
            'TrocaTroca\Listeners\SendEmailToExchangeDeclinedUser',
        ],
        'TrocaTroca\Events\ExchangeAuthorizedEvent' => [
            'TrocaTroca\Listeners\SendEmailToExchangeAuthorizedUsers',
        ],
        'TrocaTroca\Events\ExchangeCanceledEvent' => [
            'TrocaTroca\Listeners\SendEmailToExchangeCanceledUsers',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
