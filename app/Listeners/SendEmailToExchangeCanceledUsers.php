<?php

namespace TrocaTroca\Listeners;

use TrocaTroca\Events\ExchangeCanceledEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use TrocaTroca\Mail\ExchangeCanceled;
use TrocaTroca\Models\Exchange;
use TrocaTroca\Models\User;

class SendEmailToExchangeCanceledUsers
{
    /**
     * Handle the event.
     *
     * @param  ExchangeCanceledEvent  $event
     * @return void
     */
    public function handle(ExchangeCanceledEvent $event)
    {
        /** @var Exchange $exchange */
        $exchange = $event->getExchange();
        /** @var User $user */
        $user = $event->getUser();
        \Mail::to($exchange->user2, $exchange->user1())->send(new ExchangeCanceled($exchange, $user));
    }
}
