<?php
declare(strict_types=1);
namespace TrocaTroca\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Mnabialek\LaravelEloquentFilter\Traits\Filterable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use SoftDeletes;
    use Filterable;

    const ROLE_ADMIN = 1;
    const ROLE_MANAGER = 2;
    const ROLE_SUPER = 3;
    const ROLE_OPERATOR = 4;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'key', 'username', 'email', 'password', 'unit_id', 'sector_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * @return mixed
     */
    public function unit()
    {
        return $this->belongsTo(Unit::class)->withTrashed();
    }

    /**
     * @return mixed
     */
    public function sector()
    {
        return $this->belongsTo(Sector::class)->withTrashed();
    }

    /**
     * @return HasMany
     */
    public function log()
    {
        return $this->hasMany(Log::class);
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->id;
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [
            'key' => $this->key,
            'username' => $this->username,
            'profile' => [
                'has_photo' => $this->profile->photo ? true : false,
                'photo_url' => $this->profile->photo_url,
                'phone_number' => $this->profile->phone_number,
                //'firebase_uid' => $this->profile->firebase_uid
            ]
        ];
    }

    /**
     * @return HasOne
     */
    public function profile()
    {
        return $this->hasOne(UserProfile::class)->withDefault();
    }

    /**
     * @param array $data
     * @return User
     * @throws \Exception
     */
    public static function createCustomer(array $data) : User
    {
        try{
            UserProfile::uploadPhoto($data['photo']);
            \DB::beginTransaction();
            $user = self::createCustomerUser($data);
            UserProfile::saveProfile($user, $data);
            \DB::commit();
        } catch (\Exception $e) {
            UserProfile::deleteFile($data['photo']);
            \DB::rollBack();
            throw $e;
        }
        return $user;
    }

    /**
     * @param array $data
     * @return User
     */
    public static function createCustomerUser(array $data) : User
    {
        $data['password'] = bcrypt(str_random(16));
        $data['key'] = str_random(4);
        $user = User::create($data);
        $user->role = User::ROLE_OPERATOR;
        $user->save();
        return $user;
    }

    /**
     * @param array $data
     * @return User
     * @throws \Exception
     */
    public function updateWithProfile(array $data) : User
    {
        try{
            if (isset($data['photo'])) {
                UserProfile::uploadPhoto($data['photo']);
            }

            \DB::beginTransaction();
            $this->fill($data);
            $this->save();
            UserProfile::saveProfile($this, $data);
            \DB::commit();
        } catch (\Exception $e) {
            if (isset($data['photo'])) {
                UserProfile::deleteFile($data['photo']);
            }

            \DB::rollBack();
            throw $e;
        }
        return $this;
    }

}
