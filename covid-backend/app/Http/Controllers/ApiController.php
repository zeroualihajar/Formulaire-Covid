<?php
namespace App\Http\Controllers;

use Tymon\JWTAuth\Facades\JWTAuth;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;
class ApiController extends Controller
{
    /**
     * @var bool
     */
    public $loginAfterSignUp = true;

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
public function login(Request $request)
    {
        $input = $request->only('email', 'password');

        $user = $request->input('user');
        $token = null;

        if (!$token = JWTAuth::attempt($input,$user)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Email or Password',
            ], 401);
        }
        else {
            if( $user == 'patient')
            {
                return response()->json([
                'success' => false,
                'message' => 'Compte patient',
               ], 401);
            }
            else{
            return response()->json([
            'success' => true,
            'token' => $token,

          ]);
         }
        }

        // return response()->json([
        //     'success' => true,
        //     'token' => $token,
        // ]);
    }

    public function loginM(Request $request)
    {
        $input = $request->only('email', 'password');
        $user = $request->input('user');
        $token = null;

        if (!$token = JWTAuth::attempt($input,$user)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Email or Password',
            ], 401);
        }
        else {
            if( $user != 'patient')
            {
                return response()->json([
                'success' => false,
                'message' => 'Compte medecin',
               ], 401);
            }
            return response()->json([
            'success' => true,
            'token' => $token,
        ]);
        }


    //     return response()->json([
    //         'success' => true,
    //         'token' => $token,
    //     ]);
    //
}

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function logout(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);

        try {
            JWTAuth::invalidate($request->token);

            return response()->json([
                'success' => true,
                'message' => 'User logged out successfully'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the user cannot be logged out'
            ], 500);
        }
    }

    /**
     * @param RegistrationFormRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegistrationFormRequest $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->user =$request->user;
        $user->save();

        if ($this->loginAfterSignUp) {
            return $this->login($request);
        }

        return response()->json([
            'success'   =>  true,
            'data'      =>  $user
        ], 200);
    }
}
