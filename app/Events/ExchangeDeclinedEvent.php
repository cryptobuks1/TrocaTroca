<?php

namespace TrocaTroca\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use TrocaTroca\Models\Exchange;

class ExchangeDeclinedEvent
{
    /**
     * @var Exchange
     */
    private $exchange;

    /**
     * Create a new event instance.
     *
     * @param Exchange $exchange
     */
    public function __construct(Exchange $exchange)
    {
        //
        $this->exchange = $exchange;
    }

    /**
     * @return Exchange
     */
    public function getExchange(): Exchange
    {
        return $this->exchange;
    }
}
