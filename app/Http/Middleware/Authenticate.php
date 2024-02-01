<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected $guards;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string[]  ...$guards
     * @return mixed
     *
     * @throws \Illuminate\Auth\AuthenticationException
     */
    public function handle($request, \Closure $next, ...$guards)
    {
        $this->guards = $guards;

        return parent::handle($request, $next, ...$guards);
    }

    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
//    protected function redirectTo($request): ?string
//    {
//        if (!$request->expectsJson()) {
//            if (Arr::first($this->guards) === 'admin') {
//                return route('admin.login');
//            } elseif (Arr::first($this->guards) === 'aslab') {
//                return route('aslab.login');
//            } elseif (Arr::first($this->guards) === 'praktikan') {
//                return route('praktikan.login');
//            }
//        }
//        return null;
//    }
    protected function redirectTo(Request $request): ?string
    {
        return $request->expectsJson() ? null : route('praktikan.login');
    }
}
