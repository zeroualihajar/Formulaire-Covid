<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;
use Illuminate\Support\Facades\DB;
use App\User;
use Symfony\Component\HttpFoundation\Response;

class changePasswordController extends Controller
{
    public function process(ChangePasswordRequest $request)
    {
        return $this->getPasswordResetTableRow($request)->count()>0  ? $this->changePassword($request) : $this->tokenNotFoundResponse();
    }

    public function getPasswordResetTableRow($request)
    {
        return DB::table('password_resets')->where(['email' => $request -> email,
                                                    'token' =>$request -> resetToken]);
    }

    public function tokenNotFoundResponse()
    {
        return response()->json(['error' => 'Token or email is incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    public function changePassword($request)
    {
        $user = User :: whereEmail($request->email)->first();
        $user->update(['password'=>bcrypt($request->password)]);
        $this->getPasswordResetTableRow($request)->delete();
        return response()->json(['data'=>'Password successfully changed'],Response::HTTP_CREATED);
    }
}
