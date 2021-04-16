<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Question extends Model
{
    use SoftDeletes;
    /**
      * The attributes that are mass assignable.
      *
      * @var array
      */
      protected $fillable = [
        'test_corona',
        'isolement_medical',
        'situations',
        'symptomes',
        'temps_tousse',
        'statut',
        'resultat',
        'patient_id',
      ];

      public function patient()
      {
          return $this->belongsTo('App\Patient','patient_id');
      }
}
