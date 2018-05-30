import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutes } from './app-routing.module';

import { QuotesService } from './services/quotes-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopicPipe } from './pipes/topic-pipe';
import { AuthorComponent } from './author/author.component';
import { AuthorResolver } from './services/author-resolver.service';

export function init_app(quotesService: QuotesService) {
  return () => quotesService.getQuotes();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorComponent,
    TopicPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutes
  ],
  providers: [ 
    QuotesService,
    AuthorResolver,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [QuotesService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
