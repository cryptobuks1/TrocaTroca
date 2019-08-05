<?php

namespace TrocaTroca\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use TrocaTroca\Models\User;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'TrocaTroca\Model' => 'TrocaTroca\Policies\ModelPolicy',

    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        \Gate::define('is_admin', function ($user) {
            return $user->role = User::ROLE_ADMIN;
        });

        \Gate::define('is_manager', function ($user) {
            return $user->role = User::ROLE_MANAGER;
        });

        \Gate::define('is_super', function ($user) {
            return $user->role = User::ROLE_SUPER;
        });

        \Gate::define('is_operator', function ($user) {
            return $user->role = User::ROLE_OPERATOR;
        });
    }
}
