<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class resultController extends Controller
{
    public function displayResult()
    {
        $patient = DB::table('patients')->where('user_id', auth()->user()->id)->pluck('id');
        foreach($patient as $element)
        $resultat = DB::table('questions')->where('patient_id',$element)->get();
        return response()->json(compact('resultat'));
    }
}
