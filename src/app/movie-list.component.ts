import { Component } from '@angular/core';
import { MovieResult } from './movie-result';
import { MovieService } from './movie.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: MovieResult[] = [];
  searchTerm: string = '';

  constructor(private movieService: MovieService) { }

  clickSearch(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.searchMovie(this.searchTerm).subscribe(searchResult => this.movies = searchResult.results);
  }
}
