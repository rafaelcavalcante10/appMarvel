import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() titulo : string = "";
  @Input() subtitulo : string = "";
  @Input() iconClass : string = "fa fa-user";

  constructor() { }

  ngOnInit(): void {
  }

}
