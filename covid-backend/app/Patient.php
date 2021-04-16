<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use SoftDeletes;
   /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'sexe','address','city','phone','age'
    ];

    public function User()
    {
        return $this->hasOne('App\User', 'user_id');
    }

    public function Questions()
    {
        return $this->hasMany('App\Question');
    }
}
