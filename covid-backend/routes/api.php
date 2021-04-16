<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('loginM', 'ApiController@loginM');
Route::post('login', 'ApiController@login');

Route::post('register', 'ApiController@register');
Route::post('sendPasswordResetLink', 'resetPasswordController@sendEmail');
Route::post('resetPassword', 'changePasswordController@process');
//Route::get('showUser' , 'PatientsController@showUser');
Route::get('showStatut' , 'PatientsController@showStatut');
Route::get('traiter/{id}' , 'QuestionsController@traiter');
Route::get('infos/{id}' , 'PatientsController@infos');

Route::post('updateRes', 'QuestionsController@updateRes');
Route::get('dejaTraiter' , 'PatientsController@dejaTraiter');
Route::get('deja' , 'PatientsController@deja');
Route::get('getRes/{id}' , 'QuestionsController@getRes');
Route::get('graphe' , 'QuestionsController@graphe');
Route::get('genre' , 'PatientsController@genre');


Route::group(['middleware' => 'auth.jwt'], function () {
    Route::get('logout', 'ApiController@logout');
    Route::post('personalInfo' , 'PatientsController@personalInfo');
    Route::get('info' , 'PatientsController@displayPersonelInfo');
    Route::post('medicalInfo', 'QuestionsController@medicalInfo');
    Route::get('results', 'resultController@displayResult');
    Route::resource('/tasks', 'TaskController');


});
