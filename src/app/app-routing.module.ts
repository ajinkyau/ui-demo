import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { AuthorResolver } from './services/author-resolver.service';

const appRoutes: Routes = [
    {
        path: 'quotes',
        component: HomeComponent
    },
    {
        path: 'author/:id',
        component: AuthorComponent,
        resolve: {
            author: AuthorResolver
        }
    },
    {
        path: '',
        redirectTo: 'quotes',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutes { }