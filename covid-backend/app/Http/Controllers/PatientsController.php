<?php

namespace App\Http\Controllers;

use App\Patient;
use Illuminate\Http\Request;
use DB;
//use Illuminate\Support\Facades\DB;

class PatientsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient $patient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient)
    {
        //
    }

//store personel info

    public function personalInfo(Request $request)
    {
        $personal_info = new Patient();

        $personal_info->first_name = $request->first_name;
        $personal_info->last_name = $request->last_name;
        $personal_info->sexe = $request->sexe;
        $personal_info->address = $request->address;
        $personal_info->city = $request->city;
        $personal_info->phone = $request->phone;
        $personal_info->age = $request->age;
        $personal_info->user_id = auth()->user()->id;


        $personal_info->save();

        return response()->json([
            'data' => $personal_info
        ],200);
    }


    public function infos($id)
    {
        //$id = $request->json()->all();
        $patients= DB::table('patients')->select('id','first_name','last_name','sexe','address','city','phone','age')->where('id','=',$id)->get();
        return $patients;
    }

    public function showStatut(Request $request)
    {
        $id = $request->json()->all();
        $patientid= DB::table('questions')->select('id')->where('statut','=',0)->get();
        return $patientid;
    }

    //  public function showUser(Request $request)
    // {
    //     $id = $request->json()->all();
    //     $patients= DB::table('patients')->select('id','first_name','last_name')->where('id','in',showStatut())->get();
    //     return $patients;
    // }


    public function dejaTraiter(Request $request)
    {
        $id = $request->json()->all();
        $patientid= DB::table('questions')->select('id')->where('statut','=',1)->get();
        return $patientid;
    }

    // public function exp(){
    //     $patient = DB::table('patients')->where('user_id', auth()->user()->id)->pluck('id');
    //     foreach($patient as $element)
    //     $resultat = DB::table('questions')->where('patient_id',$element)->get();
    //     return response()->json(compact('resultat'));
    // }
    public function deja(Request $request)
    {
        $id = dejaTraiter();
    //    $patients= DB::table('patients')->select('id','first_name','last_name')->where('id',$id)->get();
        return response()->json(compact('id'));
    }



    public function genre()
    {
        $Homme = DB::select('select count(id) as Homme from patients where sexe = "Homme"');
        $Femme = DB::select('select count(id) as Femme from patients where sexe = "Femme"');
        return response()->json(compact('Homme','Femme'));
    }

    public function displayPersonelInfo()
    {
        $id = DB::table('patients')->where('user_id', auth()->user()->id)->pluck('id');
        foreach($id as $element)
        $patient=null;
        $patient = DB::table('patients')->where('id',$element)->get();

            return response()->json(compact('patient'));


    }
}
