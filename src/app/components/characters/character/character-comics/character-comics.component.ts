import { Character } from '../../../../models/character/character';
import { MarvelApiService } from '../../../../services/marvel-api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-characterComics',
  templateUrl: './character-comics.component.html',
  styleUrls: ['./character-comics.component.scss']
})
export class CharacterComicsComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private services : MarvelApiService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this._character = this.services.getCharacter();
    this.getCharacterComics(this._character.comics.collectionURI);
  }

  private _character : Character | any;
  public characterComics : any = [];
  public isCollapsed = false;

  private getCharacterComics(collectionURI : string): void {
    this.http.get(collectionURI+this.services.COMPL_URL).subscribe({
      next: (response : any) => {
        this.characterComics = response.data.results;
      },
      error: (error : any) => this.spinner.hide(),
      complete: () => this.spinner.hide()
    });
  }

  public MostrarEsconderImagens() : void {
    this.isCollapsed = !this.isCollapsed;
  }
}
