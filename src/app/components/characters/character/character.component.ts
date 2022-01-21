import { Character } from '../../../models/character/character';
import { MarvelApiService } from '../../../services/marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  constructor(private services:MarvelApiService,
              private router:Router
            ) { }

    ngOnInit(): void {
      this.character = this.services.getCharacter();
    }

    public character : Character | any;

    public btnVoltar_Click() : void {
      this.router.navigateByUrl('/characters');
    }
}
