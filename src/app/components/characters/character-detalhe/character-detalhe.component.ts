import { Character } from './../../../models/character/character';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detalhe',
  templateUrl: './character-detalhe.component.html',
  styleUrls: ['./character-detalhe.component.scss']
})
export class CharacterDetalheComponent implements OnInit {

  constructor(
    private router : Router,
    private services : MarvelApiService
  ) { }

  ngOnInit(): void {
    this.character = this.services.getCharacter();
  }
  public character : Character | any;

  public btnVoltar_Click() : void {
    this.router.navigateByUrl('/character');
  }

}
