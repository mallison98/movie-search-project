import { Injectable } from '@angular/core';
import { MovieResult } from './movie-result';
import { SearchBody } from './search-body';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey = '673029ca2cd98f9d090afb14e40156b7';
  tmdbUrl = 'https://api.themoviedb.org/3';

  // Remove later
  mockData: MovieResult[] = [
    {
      poster_path: null,
      adult: false,
      overview: '1',
      release_date: '1/1/1',
      genre_ids: [1,2],
      id: 1,
      original_title: 'title1',
      original_language: 'english',
      title: 'evangelion 1',
      backdrop_path: null,
      popularity: 2,
      vote_count: 2,
      video: false,
      vote_average: 2
    }, 
    {
      poster_path: 'blah2',
      adult: false,
      overview: '2',
      release_date: '2/2/2',
      genre_ids: [3,4],
      id: 2,
      original_title: 'blah23',
      original_language: 'spanish',
      title: 'envalgeion 2',
      backdrop_path: '1',
      popularity: 1,
      vote_count: 1,
      video: false,
      vote_average: 1
    }
  ];

  constructor(
    private http: HttpClient
  ) { }

  searchMovieMock(): Observable<MovieResult[]> {
    return of(this.mockData);
  }

  searchMovie(term: string): Observable<SearchBody> {
    return this.http.get<SearchBody>(`${this.tmdbUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${term}&page=1&include_adult=false`);
  }
}
