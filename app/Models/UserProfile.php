<?php
declare(strict_types=1);
namespace TrocaTroca\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\UploadedFile;

class UserProfile extends Model
{
    const BASE_PATH = 'app/public';
    const DIR_USERS = 'users';
    const DIR_USER_PHOTO = self::DIR_USERS . '/photos';
    const USER_PHOTO_PATH = self::BASE_PATH . '/' . self::DIR_USER_PHOTO;
    
    protected $fillable = ['photo', 'phone_number'];

    /**
     * @param User $user
     * @param array $data
     * @return UserProfile
     */
    public static function saveProfile(User $user, array $data) : UserProfile
    {
        if (array_key_exists('photo', $data)) {
            self::deletePhoto($user->profile);
            $data['photo'] = UserProfile::getPhotoHashName($data['photo']);
        }

        $user
            ->profile
            ->fill($data)
            ->save();
        return $user->profile;
    }

    /**
     * @param UserProfile $profile
     */
    private static function deletePhoto(UserProfile $profile)
    {
        if (!$profile->photo) {
            return;
        }
        $dir = self::photosDir();
        \Storage::disk('public')->delete("{$dir}/{$profile->photo}");
    }

    /**
     * @param UploadedFile|null $photo
     * @return null|string
     */
    private static function getPhotoHashName(UploadedFile $photo = null)
    {
        return $photo ? $photo->hashName() : null;
    }

    /**
     * @param $photo
     */
    public static function uploadPhoto($photo)
    {
        if (!$photo) {
            return;
        }
        $dir = self::photosDir();
        $photo->store($dir, ['disk' => 'public']);
    }

    /**
     * @return string
     */
    private static function photosDir()
    {
        $dir = self::DIR_USER_PHOTO;
        return $dir;
    }

    /**
     * @return string
     */
    public static function photosPath()
    {
        $path = self::USER_PHOTO_PATH;
        return storage_path("{$path}");
    }

    /**
     * @param UploadedFile|null $photo
     */
    public static function deleteFile(UploadedFile $photo = null)
    {
        if (!$photo) {
            return;
        }
        $path = self::photosPath();
        $photoPath = "{$path}/{$photo->hashName()}";
        if (file_exists($photoPath)) {
            \File::delete($photoPath);
        }
    }

    /**
     * @return string
     */
    public function getPhotoUrlAttribute()
    {
        $path = self::photosDir();
        return $this->photo ? asset("storage/{$path}/{$this->photo}") : 'https://www.gravatar.com/avatar/nouser.jpg';
    }

    /**
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @param UserProfile $profile
     * @param $phoneNumber
     * @return string
     */
    public static function createTokenToChangePhoneNumber(UserProfile $profile, $phoneNumber) : string
    {
        $token = base64_encode($phoneNumber);
        $profile->phone_number_token_to_change = $token;
        $profile->save();
        return $token;
    }

    /**
     * @param $token
     * @return UserProfile
     */
    public static function updatePhoneNumber($token) : UserProfile
    {
        $profile = UserProfile::where('phone_number_token_to_change', $token)->firstOrFail();
        $phoneNumber = base64_decode($token);
        $profile->phone_number = $phoneNumber;
        $profile->phone_number_token_to_change = null;
        $profile->save();
        return $profile;
    }

}
