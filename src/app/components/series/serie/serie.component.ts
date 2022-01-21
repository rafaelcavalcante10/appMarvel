import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  constructor(private services:MarvelApiService,
              private router:Router
  ) { }

  ngOnInit(): void {
    this.serie = this.services.getSerie();
  }

  public serie : any;

  public btnVoltar_Click() : void {
    this.router.navigateByUrl('/series');
  }

}
