import { Router } from '@angular/router';
import { MarvelApiService } from './../../../services/marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic/comic';

@Component({
  selector: 'app-comic-detalhe',
  templateUrl: './comic-detalhe.component.html',
  styleUrls: ['./comic-detalhe.component.scss']
})
export class ComicDetalheComponent implements OnInit {

  constructor(
    private services : MarvelApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.comic = this.services.getComic();
  }
  public comic : Comic | any;

  public btnVoltar_Click() : void {
    this.router.navigateByUrl('/comic');
  }
}
