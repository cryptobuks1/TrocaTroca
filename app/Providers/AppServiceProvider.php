<?php

namespace TrocaTroca\Providers;

use Illuminate\Support\ServiceProvider;
use Kreait\Firebase;
use Kreait\Firebase\Factory;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(Firebase::class, function () {
            $serviceAccount = Firebase\ServiceAccount::fromJsonFile(base_path('firebase-admin.json'));
            return (new Factory())->withServiceAccount($serviceAccount)->create();
        });
    }
}
