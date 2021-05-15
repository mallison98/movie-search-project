import { Injectable } from '@angular/core';
import { SearchBody } from '../models/search-body';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorBody } from '../models/error-body';
import { GetBody } from '../models/get-body';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = '673029ca2cd98f9d090afb14e40156b7';
  tmdbUrl = 'https://api.themoviedb.org/3';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 
   * @param term 
   * @param page 
   * @returns result from movie search
   */
  searchMovie(term: string, page: number): Observable<SearchBody|ErrorBody> {
    const cleanTerm = term.trim();
    const searchUrl = `${this.tmdbUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${cleanTerm}&page=${page}&include_adult=false`;
    return this.http.get<SearchBody|ErrorBody>(searchUrl).pipe(
      catchError(error => {
        console.error(error);
        return of(error);
      })
    );
  }

  getMovie(movieId: number): Observable<GetBody|ErrorBody> {
    const searchUrl = `${this.tmdbUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<GetBody|ErrorBody>(searchUrl).pipe(
      catchError(error => {
        console.error(error);
        return of(error);
      })
    );
  }
}
