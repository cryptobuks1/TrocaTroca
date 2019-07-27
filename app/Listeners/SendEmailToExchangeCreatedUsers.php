<?php

namespace TrocaTroca\Listeners;

use TrocaTroca\Events\ExchangeCreatedEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use TrocaTroca\Mail\ExchangeCreated;
use TrocaTroca\Models\Exchange;
use TrocaTroca\Notifications\ExchangeCreatedNotification;

class SendEmailToExchangeCreatedUsers
{
    /**
     * Handle the event.
     *
     * @param  ExchangeCreatedEvent  $event
     * @return void
     */
    public function handle(ExchangeCreatedEvent $event)
    {
        /** @var Exchange $exchange */
        $exchange = $event->getExchange();
        \Mail::to($exchange->user2)->send(new ExchangeCreated($exchange));
    }
}
