<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use Illuminate\Http\Request;

class CommandeController extends Controller
{
    public function store_from_form(Request $request) {

        foreach($request->data as $command ) {

            $new_command = new Commande;

            $new_command ->nom_client = $command["nom_client"];
            if ($command["sandwich_id"] != "Pas de sandwich") {
                $new_command ->sandwich_id = $command["sandwich_id"];
            }
            if ($command["boisson_id"] != "Pas de boisson") {
                $new_command->boisson_id = $command["boisson_id"];
            }
            if ($command["dessert_id"] != "Pas de dessert") {
                $new_command->dessert_id = $command["dessert_id"];
            }
            $new_command ->etat = "on_going";
            $new_command ->price = 4.0;

            $new_command ->save();
        }
        return response()->json($request);
    }
}
