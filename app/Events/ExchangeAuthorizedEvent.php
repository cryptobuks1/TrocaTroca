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
use TrocaTroca\Models\User;

class ExchangeAuthorizedEvent
{

    /**
     * @var Exchange
     */
    private $exchange;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new event instance.
     *
     * @param Exchange $exchange
     * @param User $user
     */
    public function __construct(Exchange $exchange, User $user)
    {
        $this->exchange = $exchange;
        $this->user = $user;
    }

    /**
     * @return Exchange
     */
    public function getExchange(): Exchange
    {
        return $this->exchange;
    }

    /**
     * @return User
     */
    public function getUser(): User
    {
        return $this->user;
    }

}
