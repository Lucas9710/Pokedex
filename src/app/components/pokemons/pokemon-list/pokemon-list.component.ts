import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


import { forkJoin, Observable } from 'rxjs';
import { PokemonList } from 'src/app/models/pokemon.list';
import { PokemonDetail } from 'src/app/models/pokemon.detail';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { pokemon } from 'src/app/models/pokemon.list';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  

  pokemons : any

  constructor(private pokemonService: PokemonService, private userService: UserService,
    private router: Router) { }

  
  ngOnInit(): void {
    this.ionViewDidLoad();
    
  }

  ionViewDidLoad(){

    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data

      console.log(this.pokemons)
    })
   
     
   }
   onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}

