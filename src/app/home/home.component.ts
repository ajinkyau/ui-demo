import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes-service';
import { Observable } from 'rxjs';
import { Quote } from '../model/quotes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotes: Observable<Array<Quote>>;

  constructor(private quotesService: QuotesService, private router: Router) { }

  ngOnInit() {
    this.quotes = this.quotesService.quotes;
  }

}
