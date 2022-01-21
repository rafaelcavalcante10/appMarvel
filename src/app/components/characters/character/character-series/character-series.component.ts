import { Character } from '../../../../models/character/character';
import { MarvelApiService } from '../../../../services/marvel-api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-characterSeries',
  templateUrl: './character-series.component.html',
  styleUrls: ['./character-series.component.scss']
})
export class CharacterSeriesComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private services : MarvelApiService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this._character = this.services.getCharacter();
    this.getCharacterSeries(this._character.series.collectionURI);
  }

  private _character : Character | any;
  public characterSeries : any = [];
  public isCollapsed = false;

  private getCharacterSeries(collectionURI : string): void {
    this.http.get(collectionURI+this.services.COMPL_URL).subscribe({
      next: (response : any) => {
        this.characterSeries = response.data.results;
      },
      error: (error : any) => this.spinner.hide(),
      complete:()=> this.spinner.hide()
    });
  }

  public MostrarEsconderImagens() : void {
    this.isCollapsed = !this.isCollapsed;
  }
}
