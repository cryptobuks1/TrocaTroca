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
                'phone_number' => '+16505551235',
                'photo' => $this->getManagerPhoto()
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'super1@user.com',
            'role' => User::ROLE_SUPER
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551236',
                'photo' => $this->getSuperPhoto()
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'super2@user.com',
            'role' => User::ROLE_SUPER
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551237',
                'photo' => $this->getSuperPhoto()
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'super3@user.com',
            'role' => User::ROLE_SUPER
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551238',
                'photo' => $this->getSuperPhoto()
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'oper1@user.com',
            'role' => User::ROLE_OPERATOR
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551239',
                'photo' => $this->getOperatorPhoto()
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'oper2@user.com',
            'role' => User::ROLE_OPERATOR
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551240',
                'photo' => $this->getOperatorPhoto()
            ]);
            Model::unguard();
        });
        factory(User::class, 1)->create([
            'email' => 'oper3@user.com',
            'role' => User::ROLE_OPERATOR
        ])->each(function ($user) {
            Model::reguard();
            $user->updateWithProfile([
                'phone_number' => '+16505551241',
                'photo' => $this->getOperatorPhoto()
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
            storage_path('app/faker/users/admin.png'),
            str_random(16) . '.jpg'
        );
    }

    public function getManagerPhoto()
    {
        return new UploadedFile(
            storage_path('app/faker/users/manager.jpg'),
            str_random(16) . '.jpg'
        );
    }

    public function getSuperPhoto()
    {
        return new UploadedFile(
            storage_path('app/faker/users/supervisor.png'),
            str_random(16) . '.jpg'
        );
    }

    public function getOperatorPhoto()
    {
        return new UploadedFile(
            storage_path('app/faker/users/operator.jpg'),
            str_random(16) . '.jpg'
        );
    }
}
