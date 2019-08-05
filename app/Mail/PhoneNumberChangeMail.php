<?php

namespace TrocaTroca\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use TrocaTroca\Models\User;

class PhoneNumberChangeMail extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * @var User
     */
    public $user;
    public $url;
    private $token;

    /**
     * Create a new message instance.
     *
     * @param User $user
     * @param $token
     */
    public function __construct(User $user, $token)
    {
        //
        $this->user = $user;
        $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->url = route('customers.web_phone_number_update', ['token' => $this->token]);
        return $this->subject('Alteração do número de telefone')
            ->markdown('emails.phone_number_change_email');
    }
}
