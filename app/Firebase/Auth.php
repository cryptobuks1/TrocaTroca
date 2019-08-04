<?php
/**
 * Created by PhpStorm.
 * User: Herval
 * Date: 04/08/2019
 * Time: 20:16
 */
declare(strict_types=1);
namespace TrocaTroca\Firebase;
use Kreait\Firebase;
class Auth
{
    /**
     * @var Firebase
     */
    private $firebase;
    public function __construct(Firebase $firebase)
    {
        $this->firebase = $firebase;
    }
    public function user($token)
    {
        $verifiedIdToken = $this->firebase->getAuth()->verifyIdToken($token);
        $uid = $verifiedIdToken->getClaim('sub');
        return $this->firebase->getAuth()->getUser($uid);
    }
    public function phoneNumber($token) : string
    {
        $user = $this->user($token);
        return $user->phoneNumber;
    }
}