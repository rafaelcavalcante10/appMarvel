import { Comic } from '../../../models/comic/comic';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  constructor(private services:MarvelApiService,
                private router:Router,
                private spinner: NgxSpinnerService
              ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.comic = this.services.getComic();
  }

  public comic : Comic | any;

  public btnVoltar_Click() : void {
    this.router.navigateByUrl('/comics');
  }
}
