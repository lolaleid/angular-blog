import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = ""; //url da imagem do post
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";
  @Input()
  id: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
