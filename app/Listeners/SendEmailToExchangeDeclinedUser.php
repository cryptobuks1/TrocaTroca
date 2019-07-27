<?php

namespace TrocaTroca\Listeners;

use TrocaTroca\Events\ExchangeDeclinedEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use TrocaTroca\Mail\ExchangeDeclined;
use TrocaTroca\Models\Exchange;

class SendEmailToExchangeDeclinedUser
{
    /**
     * Handle the event.
     *
     * @param  ExchangeDeclinedEvent  $event
     * @return void
     */
    public function handle(ExchangeDeclinedEvent $event)
    {
        /** @var Exchange $exchange */
        $exchange = $event->getExchange();
        \Mail::to($exchange->user1)->send(new ExchangeDeclined($exchange));
    }
}
