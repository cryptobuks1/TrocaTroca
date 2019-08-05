<?php

namespace TrocaTroca\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserProfile extends Model
{
    const BASE_PATH = 'app/public';
    const DIR_USERS = 'users';
    const DIR_USER_PHOTO = self::DIR_USERS . '/photos';
    const USER_PHOTP_PATH = self::BASE_PATH . '/' . self::DIR_USER_PHOTO;
    
    protected $fillable = ['photo', 'phone_number'];

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
        return "{$dir}";
    }

    /**
     * @return string
     */
    public static function photosPath()
    {
        $path = self::USER_PHOTP_PATH;
        return storage_path("{$path}");
    }

    /**
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
