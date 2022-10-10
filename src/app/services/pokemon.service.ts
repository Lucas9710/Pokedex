import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { pokemon, PokemonList } from "../models/pokemon.list";
import { PokemonDetail } from "../models/pokemon.detail";

import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PokemonService {
  
    private baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1154';
    constructor(private http: HttpClient) { 
        console.log("hola proveedor")
    }

   getPokemons() : Observable <pokemon>{
    return this.http.get<pokemon>(this.baseUrl)
   }
    
}