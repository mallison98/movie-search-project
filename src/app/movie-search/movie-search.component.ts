import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieResult } from '../movie-result';
import { ErrorBody } from '../error-body';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchTerm: string = '';
  movies: MovieResult[] = [];
  errorInfo: ErrorBody = null;
  searched: boolean = false;
  currentPage: number = 1;
  totalPages: number = 1;
  loading: boolean = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
  
  goToPage(page: number) {
    if((page <= this.totalPages) && (page > 0)) {
      this.getMovies(page);
    }
  }

  private getMovies(page: number): void {
    if(this.searchTerm) {
      this.errorInfo = null;
      this.loading = true;
      this.movieService.searchMovie(this.searchTerm, page).subscribe((searchResult: any) => {
        if(this.isError(searchResult)) {
          this.errorInfo = searchResult;
        } else {
          this.movies = searchResult.results;
          this.currentPage = searchResult.page;
          this.totalPages = searchResult.total_pages;
        }
        // From now on, display not found message if this.movies is empty
        this.searched = true;
        this.loading = false;
      });
    }
  }

  private isError(message: any): boolean {
    return 'error' in message;
  }

  search(term: string): void {
    this.searchTerm = term.trim();
    this.getMovies(1);
  }

}
