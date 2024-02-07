<?php

namespace App\Http\Controllers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(
            ['auth:admin,aslab,praktikan'],
            ['except' => ['authAdmin', 'authAslab', 'authPraktikan']]
        );
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return JsonResponse
     * @throws ValidationException
     */
    public function authAdmin(Request $request)
    {
        $validator = Validator::make($request->only(['username', 'password']), [
            'username' => 'required|string',
            'password' => 'required|string|min:6'
        ]);
        if ($validator->fails()) {
            return Response::json([
                'message' => 'Format data yang diberikan tidak tepat!'
            ], 400);
        }

        if (!$token = auth('admin')->attempt($validator->validated())) {
            return Response::json([
                'message' => 'Autentikasi gagal!'
            ], 401);
        }

        return Response::json([
            'message' => 'Autentikasi berhasil! Selamat datang..',
            'data' => [
                'accessToken' => $token,
                'tokenType' => 'bearer',
                'expiresIn' => auth('admin')->factory()->getTTL() * 120
            ]
        ]);
    }

    /**
     * @throws ValidationException
     */
    public function authAslab(Request $request): JsonResponse
    {
        $validator = Validator::make($request->only(['npm', 'password']), [
            'npm' => 'required|string|min:10',
            'password' => 'required|string|min:6'
        ]);
        if ($validator->fails()) {
            return Response::json([
                'message' => 'Format data yang diberikan tidak tepat!'
            ], 400);
        }

        if (!$token = auth('aslab')->attempt($validator->validated())) {
            return Response::json([
                'message' => 'Autentikasi gagal! NPM atau Password salah..'
            ], 401);
        }

        return Response::json([
            'message' => 'Autentikasi berhasil! Selamat datang..',
            'data' => [
                'accessToken' => $token,
                'tokenType' => 'bearer',
                'expiresIn' => auth('aslab')->factory()->getTTL() * 120
            ]
        ]);
    }

    /**
     * @throws ValidationException
     */
    public function authPraktikan(Request $request): JsonResponse
    {
        $validator = Validator::make($request->only(['npm', 'password']), [
            'npm' => 'required|string|min:10',
            'password' => 'required|string|min:6'
        ]);
        if ($validator->fails()) {
            return Response::json([
                'message' => 'Format data yang diberikan tidak tepat!'
            ], 400);
        }

        if (!$token = auth('praktikan')->attempt($validator->validated())) {
            return Response::json([
                'message' => 'Autentikasi gagal! NPM atau Password salah..'
            ], 401);
        }

        return Response::json([
            'message' => 'Autentikasi berhasil! Selamat datang..',
            'data' => [
                'accessToken' => $token,
                'tokenType' => 'bearer',
                'expiresIn' => auth('praktikan')->factory()->getTTL() * 120
            ]
        ]);
    }
  
    public function logoutAdmin(): JsonResponse
    {
        auth('admin')->logout();

        return Response::json((['message' => 'Berhasil logout!']));
    }
    public function logoutAslab(): JsonResponse
    {
        auth('aslab')->logout();

        return Response::json((['message' => 'Berhasil logout!']));
    }
    public function logoutPraktikan(): JsonResponse
    {
        auth('praktikan')->logout();

        return Response::json((['message' => 'Berhasil logout!']));
    }

    /**
     * Refresh a token.
     *
     * @return JsonResponse
     */
    public function refresh($guard = null): JsonResponse
    {
        $availableGuard = ['admin', 'aslab', 'praktikan'];
        if (!$guard) {
            $guard = 'praktikan';
        } elseif (!Arr::has($availableGuard, $guard)) {
            abort(404);
        }
        $refreshToken = auth($guard)->refresh();
        return Response::json([
            'message' => 'Refresh token berhasil!',
            'data' => [
                'accessToken' => $refreshToken,
                'tokenType' => 'bearer',
                'expiresIn' => auth()->factory()->getTTL() * 120
            ]
        ]);
    }
    public function getToken($guard, Request $request)
    {
        $guardList = ['admin', 'aslab', 'praktikan'];
        if (!$guard) {
            $request->user('praktikan')->tokens()->delete();
            $token = $request->user('praktikan')->createToken('auth_token');
            return Response::json([
                'message' => 'Token berhasil didapatkan!',
                'data' => $token->plainTextToken
            ]);
        }

        if (!Arr::has($guardList, $guard)) {
            return Response::json([
                'message' => 'Request token tidak valid!'
            ], 400);
        }

        $request->user($guard)->tokens()->delete();
        $token = $request->user($guard)->createToken('auth_token');
        return Response::json([
            'message' => 'Token berhasil didapatkan!',
            'data' => $token->plainTextToken
        ]);
    }
}
