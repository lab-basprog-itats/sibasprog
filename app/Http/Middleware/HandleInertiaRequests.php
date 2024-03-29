<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        $admin = $request->user('admin');
        $aslab = $request->user('aslab');
        $praktikan = $request->user('praktikan');

        return array_merge(parent::share($request), [
            'auth' => [
                'admin' => $admin ? [
                    'nama' => $admin->nama,
                    'username' => $admin->username
                ] : null,
                'aslab' => $aslab ? [
                    'nama' => $aslab->nama,
                    'npm' => $aslab->npm,
                ] : null,
                'praktikan' => $praktikan ? [
                    'nama' => $praktikan->nama,
                    'npm' => $praktikan->npm
                ] : null
            ]
        ]);
    }
}
