import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Quote } from '../model/quotes';
import Quotes from '../data/quotes';

@Injectable()
export class QuotesService {
    quotesUrl = 'assets/quotes.json';
    quotes: Observable<Array<Quote>>;

    constructor(private http: HttpClient) {

    }

    getQuotes() {
        /*  this can be done in two ways since we have the json reponse locally.
            We can define the json reponse in the ".ts" file, in this case defined in "../data/quotes.ts".
            Or we can use the existing json and send an API to the url where the json is located.
        */

        // return this.http.get<Array<Quote>>(this.quotesUrl);
        this.quotes = of(Quotes);
    }
}