import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie-detalhe',
  templateUrl: './serie-detalhe.component.html',
  styleUrls: ['./serie-detalhe.component.scss']
})
export class SerieDetalheComponent implements OnInit {

  constructor(
    private router : Router,
    private services : MarvelApiService
  ) { }

  ngOnInit(): void {
    this.serie = this.services.getSerie();
  }
  public serie : any;

  public btnVoltar_Click() : void{
    this.router.navigateByUrl('/serie');
  }
}
