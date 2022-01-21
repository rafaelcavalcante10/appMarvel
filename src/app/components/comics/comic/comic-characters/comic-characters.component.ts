import { Character } from '../../../../models/character/character';
import { Comic } from '../../../../models/comic/comic';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-comicCharacters',
  templateUrl: './comic-characters.component.html',
  styleUrls: ['./comic-characters.component.scss']
})
export class ComicCharactersComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private services : MarvelApiService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this._comic = this.services.getComic();
    this.getComicCharacters(this._comic.characters.collectionURI);
  }
  private _comic : Comic | any;
  public comicCharacters : Character[] = [];
  public isCollapsed = false;

  private getComicCharacters(collectionURI : string): void {
    this.http.get(collectionURI+this.services.COMPL_URL).subscribe({
      next: (response : any) => {
        this.comicCharacters = response.data.results;
      },
      error: (error : any) => this.spinner.hide(),
      complete:()=> this.spinner.hide()
    });
  }

  public MostrarEsconderImagens() : void {
    this.isCollapsed = !this.isCollapsed;
  }
}
