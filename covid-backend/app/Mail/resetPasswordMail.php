<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use SebastianBergmann\Environment\Console;

class resetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    public $baseUrl;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token, $baseUrl)
    {
        $this->token = $token;
        $this->baseUrl =$baseUrl;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('Email.passwordReset')->with([
            'token'=>$this->token,
            'BaseUrl' =>$this ->baseUrl
            ]);
    }
}
