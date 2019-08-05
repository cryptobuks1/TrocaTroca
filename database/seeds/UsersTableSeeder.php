<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Http\UploadedFile;
use TrocaTroca\Models\User;
use TrocaTroca\Models\UserProfile;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \File::deleteDirectory(UserProfile::photosPath(), true);
        factory(User::class, 1)->create([
            'email' => 'admin@user.com',
            'role' => User::ROLE_ADMIN
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551234',
                'photo' => $this->getAdminPhoto()
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'manager@user.com',
            'role' => User::ROLE_MANAGER
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551235'
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'super1@user.com',
            'role' => User::ROLE_SUPER
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551236'
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'super2@user.com',
            'role' => User::ROLE_SUPER
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551237'
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'super3@user.com',
            'role' => User::ROLE_SUPER
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551238'
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'oper1@user.com',
            'role' => User::ROLE_OPERATOR
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551239'
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'oper2@user.com',
            'role' => User::ROLE_OPERATOR
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551240'
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'oper3@user.com',
            'role' => User::ROLE_OPERATOR
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551241'
            ]);
            Model::unguard();
        });
        factory(User::class, 50)->create([
            'role' => User::ROLE_OPERATOR
        ]);
    }

    /**
     * @return UploadedFile
     */
    public function getAdminPhoto()
    {
        return new UploadedFile(
            storage_path('app/faker/users/1624_mod.png'),
            str_random(16) . '.jpg'
        );
    }
}
