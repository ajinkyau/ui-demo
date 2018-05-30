import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Author } from "../model/author";
import { QuotesService } from "./quotes-service";
import { Quote } from "../model/quotes";

@Injectable()
export class AuthorResolver implements Resolve<Author> {

    constructor(private quotesService: QuotesService) {}
    
    resolve(route: ActivatedRouteSnapshot): Author {
        let id = route.paramMap.get('id'), author: Author;

        this.quotesService.quotes.subscribe((quotes: Array<Quote>) => {
            for(const quote of quotes) {
                if(id === quote.author.id) {
                    author = quote.author;
                }
            }
        });
        return author;
    }
}