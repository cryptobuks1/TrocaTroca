<?php

use Illuminate\Database\Seeder;
use TrocaTroca\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 1)->create([
            'email' => 'admin@user.com',
            'role' => User::ROLE_ADMIN
        ])->each(function ($user) {
            $user->profile->phone_number = '+16505551234';
            $user->profile->save();
        });
        factory(User::class, 1)->create([
            'email' => 'manager@user.com',
            'role' => User::ROLE_MANAGER
        ]);
        factory(User::class, 1)->create([
            'email' => 'super1@user.com',
            'role' => User::ROLE_SUPER
        ]);
        factory(User::class, 1)->create([
            'email' => 'super2@user.com',
            'role' => User::ROLE_SUPER
        ]);
        factory(User::class, 1)->create([
            'email' => 'super3@user.com',
            'role' => User::ROLE_SUPER
        ]);
        factory(User::class, 1)->create([
            'email' => 'oper1@user.com',
            'role' => User::ROLE_OPERATOR
        ]);
        factory(User::class, 1)->create([
            'email' => 'oper2@user.com',
            'role' => User::ROLE_OPERATOR
        ]);
        factory(User::class, 1)->create([
            'email' => 'oper3@user.com',
            'role' => User::ROLE_OPERATOR
        ]);
        factory(User::class, 50)->create([
            'role' => User::ROLE_OPERATOR
        ]);
    }
}
