import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service/movie.service';
import { MovieResult } from '../models/movie-result';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchTerm: string = '';
  movies: MovieResult[] = [];
  errorMessage: string = null;
  searched: boolean = false;
  currentPage: number = 1;
  totalPages: number = 1;
  loading: boolean = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
  
  /**
   * Gets the specified page's movie search results; needs to be a valid page (no < 0, no going higher than the total page number).
   * @param page
   */
  goToPage(page: number) {
    if((page <= this.totalPages) && (page > 0)) {
      this.getMovies(page);
    }
  }

/**
 * Gets movie search results, given the page. Pulls the searchTerm from the class' properties.
 * @param page 
 */
  private getMovies(page: number): void {
    if(this.searchTerm) {
      this.errorMessage = null;
      this.loading = true;
      this.movieService.searchMovie(this.searchTerm, page).subscribe((searchResult: any) => {
        if(this.isError(searchResult)) {
          // If there's an error, get the status message so it can be displayed
          this.errorMessage = searchResult.error.status_message;
        } else {
          // If no error, get movie and page data
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

  /**
   * Returns true if the message is an error, and returns false if it is not.
   * @param message 
   * @returns boolean
   */
  private isError(message: any): boolean {
    return 'error' in message;
  }

  /**
   * Makes sure searchbox term only has alphanumeric characters; if it's a valid search term, gets 1st page of movie search results.
   * @param term 
   */
  search(term: string): void {
    if(!term.match(/^[a-zA-Z0-9\s]+$/g)) {
      this.errorMessage = 'Only alphanumeric characters are allowed.';
    } else {
      this.searchTerm = term;
      this.getMovies(1);
    }
  }
}
