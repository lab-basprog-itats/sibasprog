<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Model implements Authenticatable
{
    use HasApiTokens, HasFactory;

    protected $table = 'admin';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];

    public function getAuthIdentifierName()
    {
        // TODO: Implement getAuthIdentifierName() method.
        return 'id';
    }

    public function getAuthIdentifier()
    {
        // TODO: Implement getAuthIdentifier() method.
        return $this->getKey();
    }

    public function getAuthPassword()
    {
        // TODO: Implement getAuthPassword() method.
        return $this->password;
    }

    public function getRememberToken()
    {
        // TODO: Implement getRememberToken() method.
        return $this->remember_token;
    }

    public function setRememberToken($value)
    {
        // TODO: Implement setRememberToken() method.
        $this->remember_token = $value;
    }

    public function getRememberTokenName()
    {
        // TODO: Implement getRememberTokenName() method.
        return 'remember_token';
    }
}
