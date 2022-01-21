import { Character } from '../../models/character/character';
import { MarvelApiService } from '../../services/marvel-api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private http:HttpClient,
              private service:MarvelApiService,
              private router:Router,
              private spinner: NgxSpinnerService
            ) { }

  ngOnInit(): void {
      this.spinner.show();
      this.getAllCharacters();
  }

  //public CharactersFiltrado : any = [];
  public CharactersFiltrado : Character[] = [];
  public isCollapsed : boolean = false;

  private _filtro : string = "";
  public get Filtro() : string {
    return this._filtro;
  }
  public set Filtro(value : string) {
    this._filtro = value;
    this.CharactersFiltrado = this._filtro ?
                                this.filtrarCharacter(this._filtro)
                              :
                                this.service.getCharacters();
  }

  private filtrarCharacter(filtrarPor : string) : Character[] {
    filtrarPor = filtrarPor.toUpperCase();
    var Characters = this.service.getCharacters();
    return Characters.filter(
        (personagem : {name : string; }) => personagem.name.toUpperCase().indexOf(filtrarPor) !== -1
      );
  }

  public MostrarEsconderImagens() : void {
    this.isCollapsed = !this.isCollapsed;
  }

  public getAllCharacters() : void {
    this.http.get(this.service.URL_CHARACTERS).subscribe({
      next: (_response : any) => {
        this.service.setCharacters(_response.data.results);
        this.CharactersFiltrado = this.service.getCharacters()
      },
      error: (error:any) => this.spinner.hide(),
      complete :()=> this.spinner.hide()
    });
  }

  public goToDetalhesCharacter(character : Character) : void {
    this.service.setCharacter(character);
    this.router.navigateByUrl('/character');
  }
}
