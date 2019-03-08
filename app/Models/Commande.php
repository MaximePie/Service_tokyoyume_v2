<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    protected $fillable = [
        'nom_client', 'sandwich_id', 'boisson_id', 'dessert_id', 'etat', 'price'
    ];

    protected $table = 'commandes';
}
