import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(private http:HttpClient,
    private service:MarvelApiService,
    private router:Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getAllSeries();

  }

  public SeriesFiltrado : any = [];
  public isCollapsed = false;

  private _filtro ="";
  public get filtro()  : string {
    return this._filtro;
  }
  public set filtro(value : string) {
    this._filtro = value;
    this.SeriesFiltrado = this._filtro ?
                      this.filtrarSerie(this._filtro)
                    :
                      this.service.getSeries();
  }

  private filtrarSerie(filtrarPor:string) : any {
    filtrarPor = filtrarPor.toUpperCase();
    var serie = this.service.getSeries();
    return serie.filter(
      (serie:{title: string; }) => serie.title.toUpperCase().indexOf(filtrarPor)!== -1
    );
  }

  public mostrarEsconderImagem() : void {
    this.isCollapsed = !this.isCollapsed;
  }

  public getAllSeries() : void {
    this.http.get(this.service.URL_SERIES).subscribe({
      next:(response : any) => {
        this.service.setSeries(response.data.results);
        this.SeriesFiltrado = this.service.getSeries();
      },
      error: (error : any) => this.spinner.hide(),
      complete:()=> this.spinner.hide()
    });
  }

  public goToDetalheSeries(serie : any) : void {
    this.service.setSerie(serie);
    this.router.navigateByUrl('/serie')
  }
}
