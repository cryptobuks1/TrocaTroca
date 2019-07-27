<?php

namespace TrocaTroca\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use TrocaTroca\Models\Exchange;

class ExchangeDeclined extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * @var Exchange
     */
    public $exchange;

    /**
     * Create a new message instance.
     *
     * @param Exchange $exchange
     */
    public function __construct(Exchange $exchange)
    {
        $this->exchange = $exchange;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('Rejeição de troca confirmada')
            ->markdown('emails.exchange.declined');
    }
}
