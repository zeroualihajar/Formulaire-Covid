<?php

namespace App\Http\Controllers;

use App\Mail\resetPasswordMail;
use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use SebastianBergmann\Environment\Console;

class resetPasswordController extends Controller
{

    public $url;
    public function sendEmail(Request $request)
    {
        $this->url = $this->getUrl($request);

        if(!$this->validateEmail($request->email))
        {
            return $this->failedResponse();
        }
        $this->send($request->email);
        return $this->successResponse();

    }

    public function send($email)
    {

        $token =$this->createToken($email);
        Mail::to($email)->send(new resetPasswordMail($token,  $this->url)) ;
    }

    public function createToken($email)
    {
        $oldToken = DB::table('password_resets')->where('email', $email)->first();

        if($oldToken)
        {

            return $oldToken->token;
        }
        $token = Str::random(60);
        $this->saveToken($token, $email);
        return $token;
    }

    public function saveToken($token, $email)
    {
        DB::table('password_resets')->insert([
            'email'=>$email,
            'token'=>$token,
            'created_at'=> Carbon::now()
        ]);
    }

    public function validateEmail($email)
    {
        return !!User::where('email', $email)->first();
    }

    public function failedResponse()
    {
        return response()->json([
            'error' =>'Email does found on our database'
        ],Response::HTTP_NOT_FOUND);
    }

    public function successResponse()
    {
        return response()->json([
            'data' =>'Reset Email is send successfully, please check your inbox'
        ],Response::HTTP_OK);
    }

    public function getUrl(Request $request)
    {
        $baseUrl = DB::table('users')->where('email', $request->email)->first();

        if($baseUrl->user=='patient')
        $url ='http://localhost:8100/response-password-reset?token=';

        if($baseUrl->user=='doctor')
        $url ='http://localhost:4200/responce-password-reset?token=';
        return $url;
    }
}
