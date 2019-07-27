<?php

namespace TrocaTroca\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use TrocaTroca\Models\Exchange;
use TrocaTroca\Models\User;

class ExchangeAuthorized extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * @var Exchange
     */
    public $exchange;
    /**
     * @var User
     */
    public $user;

    /**
     * Create a new message instance.
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
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('Autorização de troca confirmada')
            ->markdown('emails.exchange.authorized');
    }
}
