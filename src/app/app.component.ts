import { Component, OnInit } from '@angular/core';
import { MyService } from './services/my-service.service';
import { CardList } from './model/card-list';
import { Card } from './model/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  list: Array<Card> = [];

  constructor (
    private myService: MyService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  refreshFeed() {
    this.list.length = 0;
    // Adds 1s of delay to provide user's feedback.
    this.myService.getContent("").delay(1000)
        .subscribe(
            feed => this.list = feed.items,
            error => console.log(error));
  }

}
