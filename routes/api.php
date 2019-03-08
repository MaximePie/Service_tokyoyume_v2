<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('ingredients', 'IngredientController@index');
Route::get('sandwiches', 'SandwichController@index');
Route::post('sandwiches', 'SandwichController@store');
Route::post('sandwiches/destroy', 'SandwichController@destroy');
Route::post('commands', 'CommandeController@store');
Route::get('sandwiches_ingredients', 'SandwichController@ingredients');

Route::post('/commands/new', 'CommandeController@store');
Route::post('commands_from_form', 'CommandeController@store_from_form');


Route::get('projects', 'ProjectController@index');
Route::post('projects', 'ProjectController@store');
Route::get('projects/{id}', 'ProjectController@show');
Route::put('projects/{project}', 'ProjectController@markAsCompleted');
Route::post('tasks', 'TaskController@store');
Route::put('tasks/{task}', 'TaskController@markAsCompleted');
