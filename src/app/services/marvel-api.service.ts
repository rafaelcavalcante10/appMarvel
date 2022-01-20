import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character/character';
import { Comic } from '../models/comic/comic';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private http: HttpClient) { }

  // API Services Variables
  public PUBLIC_KEY='7ae92e70925df04306eeb2f78fa7e1ec';
  public HASH='77df0ec0ff0d0fd90f47d4b5cfcdb436';
  public ID = '';
  public COMPL_URL=`?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  public URL_CHARACTERS=`https://gateway.marvel.com/v1/public/characters${this.ID}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  public URL_COMICS=`https://gateway.marvel.com/v1/public/comics${this.ID}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  public URL_SERIES=`https://gateway.marvel.com/v1/public/series${this.ID}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  //

  // Characters - Personagens da MARVEL
  private _character :  Character | any;
  public getCharacter() : Character | any {
    return this._character;
  }
  public setCharacter(value : Character) {
    this._character = value;
  }

  private _characters : Character[] = [];
  public getCharacters() : Character[] {
    return this._characters;
  }
  public setCharacters(value : Character[]){
    this._characters = value;
  }
  // fim - Characters

  // Comics - Revistinhas da Marvel
  private _comic : Comic | any;
  public getComic() : Comic {
    return this._comic;
  }
  public setComic(value : Comic) {
    this._comic = value;
  }

  private _comics : Comic[] = [];
  public getComics() : Comic[] {
    return this._comics;
  }
  public setComics(value : Comic[]) {
    this._comics = value;
  }
  // fim - Comics

  // Series - séries da Marvel
  private _serie : any;
  public getSerie() : any {
    return this._serie;
  }
  public setSerie(value : any) {
    this._serie = value;
  }

  private _series : any = [];
  public getSeries() : any[] {
    return this._series;
  }
  public setSeries(value : any[]) {
    this._series = value;
  }
  // fim - Series
}
