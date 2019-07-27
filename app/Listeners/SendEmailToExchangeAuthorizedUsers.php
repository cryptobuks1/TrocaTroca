<?php

namespace TrocaTroca\Listeners;

use TrocaTroca\Events\ExchangeAuthorizedEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use TrocaTroca\Mail\ExchangeAuthorized;
use TrocaTroca\Models\Exchange;
use TrocaTroca\Models\User;

class SendEmailToExchangeAuthorizedUsers
{
    /**
     * Handle the event.
     *
     * @param  ExchangeAuthorizedEvent  $event
     * @return void
     */
    public function handle(ExchangeAuthorizedEvent $event)
    {
        /** @var Exchange $exchange */
        $exchange = $event->getExchange();
        /** @var User $user */
        $user = $event->getUser();
        \Mail::to($exchange->user2, $exchange->user1())->send(new ExchangeAuthorized($exchange, $user));
    }
}
