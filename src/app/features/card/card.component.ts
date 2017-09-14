import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'model/card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: any;

  constructor() { }

  ngOnInit() {
  }

  clickCard(card: Card) {
    console.info("card clicked: ", card);
  }
}
