<?php

namespace App\Http\Controllers;

use App\Ingredient;
use App\Models\Commande;
use App\Models\Sandwich;
use Illuminate\Http\Request;

class SandwichController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sandwiches = Sandwich::all()->where('is_available');
        return $sandwiches->toJson();
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
        $validatedData = $request->validate([
            'name' => 'required',
            'price' => 'required'
        ]);

        Sandwich::create([
            'name' => $validatedData['name'],
            'price' => $validatedData['price'],

        ]);

        return response()->json('Sandwich created!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $sandwich = Sandwich::findOrFail($request->id);
        $sandwich->delete();

        return response()->json('Sandwich deleted !');
    }

    public function ingredients() {
        $sandwiches = Sandwich::all()->where('is_available');
        $sandwiches_infos = array();

        foreach($sandwiches as $sandwich) {
            $sandwichIngredients = $sandwich->hasOne('App\Ingredient')->get(['name','quantity_per_sandwich']);
            $sandwichCount = Commande::where('sandwich_id', $sandwich->id)->count();

            $sandwich_info = new \stdClass();
            $sandwich_info->count = $sandwichCount;
            $sandwich_info->ingredients = $sandwichIngredients;

            array_push($sandwiches_infos, $sandwich_info);
        }

        return response()->json($sandwiches_infos);
    }
}
