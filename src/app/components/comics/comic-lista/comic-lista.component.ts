import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Comic } from 'src/app/models/comic/comic';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-comic-lista',
  templateUrl: './comic-lista.component.html',
  styleUrls: ['./comic-lista.component.scss']
})
export class ComicListaComponent implements OnInit {

  constructor(private http:HttpClient,
              private service:MarvelApiService,
              private router:Router,
              private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getAllComics();
  }
  public ComicsFiltrado : Comic[] = [];
  public isCollapsed = false;

  private _filtro = "";
  public get filtro() : string {
    return this._filtro;
  }
  public set filtro(value : string) {
    this._filtro = value;
    this.ComicsFiltrado = this._filtro ?
                            this.filtrarComic(this._filtro)
                          :
                            this.service.getComics();
  }

  private filtrarComic(filtrarPor : string) : Comic[] {
    filtrarPor = filtrarPor.toUpperCase();
    var Comics = this.service.getComics();
    return Comics.filter(
        (revista : {title : string; }) => revista.title.toUpperCase().indexOf(filtrarPor) !== -1
      );
  }
  public mostrarEsconderImagem() : void {
    this.isCollapsed = !this.isCollapsed;
  }

  private getAllComics() : void {
    this.http.get(this.service.URL_COMICS).subscribe({
      next: (response : any)=> {
        this.service.setComics(response.data.results);
        this.ComicsFiltrado = this.service.getComics();
      },
      error: (error : any) => this.spinner.hide(),
      complete: ()=> this.spinner.hide()
    });
  }

  public goToDetalhesComics(comic : Comic) : void {
    this.service.setComic(comic);
    this.router.navigate([`/comics/detalhe/${comic.id}`]);
  }
}
