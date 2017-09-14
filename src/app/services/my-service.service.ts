import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CardList } from 'model/card-list';

@Injectable()
export class MyService {

  private baseUrl: string = 'www.platypusweb.com.br';

  constructor(
    private http: Http
  ) { }

  getContent(url: string): Observable<CardList> {
    return this.http.get(this.baseUrl + url)
            .map(this.extractFeeds)
            .catch(this.handleError);
  }

  private extractFeeds(res: Response): CardList {
    let feed = res.json();
    return feed || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
