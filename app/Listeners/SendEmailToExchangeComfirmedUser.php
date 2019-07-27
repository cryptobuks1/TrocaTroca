<?php

namespace TrocaTroca\Listeners;

use TrocaTroca\Events\ExchangeConfirmedEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use TrocaTroca\Mail\ExchangeConfirmed;
use TrocaTroca\Models\Exchange;

class SendEmailToExchangeComfirmedUser
{
    /**
     * Handle the event.
     *
     * @param  ExchangeConfirmedEvent  $event
     * @return void
     */
    public function handle(ExchangeConfirmedEvent $event)
    {
        /** @var Exchange $exchange */
        $exchange = $event->getExchange();
        \Mail::to($exchange->user1)->send(new ExchangeConfirmed($exchange));
    }
}
