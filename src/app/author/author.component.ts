import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes-service';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Quote } from '../model/quotes';
import { Router, ActivatedRoute } from '@angular/router';
import { Author } from '../model/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author: Author;

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.data
      .subscribe((data) => {
        this.author = data.author;
      });
  }

}
