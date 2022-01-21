import { Comic } from '../../../../models/comic/comic';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-comicSeries',
  templateUrl: './comic-series.component.html',
  styleUrls: ['./comic-series.component.scss']
})
export class ComicSeriesComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private services : MarvelApiService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this._comic = this.services.getComic();
    this.getComicSeries(this._comic.series.collectionURI);
  }
  private _comic : Comic | any;
  public comicSeries : Comic[] = [];
  public isCollapsed = false;

  private getComicSeries(collectionURI : string): void {
    this.http.get(collectionURI+this.services.COMPL_URL).subscribe({
      next: (response : any) => {
        this.comicSeries = response.data.results;
      },
      error: (error : any) => this.spinner.hide(),
      complete:()=> this.spinner.hide()
    });
  }

  public MostrarEsconderImagens() : void {
    this.isCollapsed = !this.isCollapsed;
  }

}
