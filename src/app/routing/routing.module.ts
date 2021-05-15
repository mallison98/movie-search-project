import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from '../movie-search/movie-search.component'
import { MovieInfoComponent } from '../movie-info/movie-info.component'

const routes: Routes = [
  { path: 'movie-info/:id', component: MovieInfoComponent },
  { path: 'movie-search', component: MovieSearchComponent },
  { path: '', redirectTo: 'movie-search', pathMatch: 'full' },
  { path: '**', redirectTo: 'movie-search' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
