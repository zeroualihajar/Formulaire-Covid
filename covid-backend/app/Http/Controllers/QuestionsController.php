<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Http\Request;
use DB;


class QuestionsController extends Controller
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
     * @param  \App\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question)
    {
        //
    }

    // store medical info
    public function medicalInfo(Request $request)
    {
        $medical_info = new Question();

        $medical_info->test_corona = $request->test_corona;
        $medical_info->isolement_medical = $request->isolement_medical;
        $medical_info->situations = $request->situations;
        $medical_info->symptomes = $request->symptomes;
        $medical_info->temps_tousse = $request->temps_tousse;
        $medical_info->patient_id = $request->patient_id;
        $medical_info->resultat ='-';
        $medical_info->statut = 0;
        $id_patient =DB::table('patients')->where('user_id', auth()->user()->id)->pluck('id');
        foreach($id_patient as $element)
        $medical_info->patient_id =$element;
        $medical_info->save();

        return response()->json([
            'data' => $medical_info
        ],200);
    }

    public function traiter($id)
    {
        // $id = $request->json()->all();
        $question= DB::table('questions')->select('test_corona','isolement_medical','situations','symptomes','temps_tousse')->where('patient_id','=',$id)->get();
        return $question;
    }



       public function updateRes(Request $request)
    {
        $id = $request->input('id');
        $resultat = $request->input('resultat');
        DB::update('update questions set resultat = ?,statut = 1 where id = ?',[$resultat,$id]);
        $change="good";
        return response()->json(compact('change'),201);
    }

        public function getRes($id)
    {
       // $id = $request->json()->all();
        $resultat= DB::table('questions')->select('resultat')->where('id','=',$id)->get();
        return response()->json(compact('resultat'));
    }

        public function graphe()
    {
        $nonTraite = DB::select('select count(id) as nonTraite from questions where statut = 0');
        $positive = DB::select('select count(id) as positive from questions where resultat = "positive"');
        $negative = DB::select('select count(id) as negative from questions where resultat = "negative"');
        return response()->json(compact('nonTraite','positive','negative'));
    }




}
