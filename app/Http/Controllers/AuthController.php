<?php

namespace App\Http\Controllers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware(
            ['auth:admin,aslab,praktikan'],
            ['except' => ['authAdmin', 'authAslab', 'authPraktikan']]
        );
    }
    private array $npmPasswordAttribute = [
        'npm' => 'NPM',
        'password' => 'Password'
    ];
    private array $usernamePasswordAttribute = [
    'username' => 'Username',
    'password' => 'Password'
    ];

    /**
     * @throws ValidationException
     */
    public function authAdmin(Request $request): JsonResponse
    {
        $requestValidator = Validator::make($request->only(['username', 'password']), [
            'username' => 'required|string|min:6',
            'password' => 'required|string|min:6'
        ], [
            'required' => ':attribute tidak boleh kosong!',
            'min' => 'Panjang minimal :attribute adalah :min'
        ], $this->usernamePasswordAttribute);
        if ($requestValidator->fails()) {
            return Response::json([
                'message' => $requestValidator->messages()->first()
            ], 400);
        }

        $validatedData = $requestValidator->validated();
        if (!Auth::guard('admin')->attempt($validatedData)) {
            return Response::json([
                'message' => 'Autentikasi gagal! Username atau Password Salah',
            ], 401);
        }

        $request->session()->regenerate();
        return Response::json([
            'message' => 'Autentikasi berhasil! Selamat datang..',
        ]);
    }

    /**
     * @throws ValidationException
     */
    public function authAslab(Request $request): JsonResponse
    {
        $requestValidator = Validator::make($request->only(['npm', 'password']), [
            'npm' => 'required|string|min:12|regex:/^[0-9]+$/',
            'password' => 'required|string|min:6'
        ], [
            'required' => ':attribute tidak boleh kosong!',
            'regex' => ':attribute berupa angka tanpa titik (.)',
            'min' => 'Panjang minimal :attribute adalah :min'
        ], $this->npmPasswordAttribute);
        if ($requestValidator->fails()) {
            return Response::json([
                'message' => $requestValidator->messages()->first()
            ], 400);
        }

        $validatedData = $requestValidator->validated();
        if (!Auth::guard('aslab')->attempt($validatedData)) {
            return Response::json([
                'message' => 'Autentikasi gagal! NPM atau Password Salah',
            ], 401);
        }

        $request->session()->regenerate();
        return Response::json([
            'message' => 'Autentikasi berhasil! Selamat datang..',
        ]);
    }

    /**
     * @throws ValidationException
     */
    public function authPraktikan(Request $request): JsonResponse
    {
        $requestValidator = Validator::make($request->only(['npm', 'password']), [
            'npm' => 'required|string|min:12|regex:/^[0-9]+$/',
            'password' => 'required|string|min:6'
        ], [
            'required' => ':attribute tidak boleh kosong!',
            'regex' => ':attribute berupa angka tanpa titik (.)',
            'min' => 'Panjang minimal :attribute adalah :min'
        ], $this->npmPasswordAttribute);
        if ($requestValidator->fails()) {
            return Response::json([
                'message' => $requestValidator->messages()->first()
            ], 400);
        }

        $validatedData = $requestValidator->validated();
        if (!Auth::guard('praktikan')->attempt($validatedData)) {
            return Response::json([
                'message' => 'Autentikasi gagal! NPM atau Password Salah',
            ], 401);
        }

        $request->session()->regenerate();
        return Response::json([
            'message' => 'Autentikasi berhasil! Selamat datang..',
        ]);
    }
    public function logout(Request $request): JsonResponse
    {
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return Response::json([
            'message' => 'Logout berhasil! Sampai jumpa'
        ]);
    }
}
