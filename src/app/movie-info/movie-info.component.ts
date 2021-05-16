import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetBody } from '../models/get-body';
import { MovieService } from '../movie-service/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movieId: number = 555;
  movie: GetBody = null;
  errorMessage: string = null;
  fieldEmpty: string = '-';
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    // Get the movieId that was routed
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.getMovieInfo();
  }

  /**
   * Gets the movie info for the class' movieId property.
   */
  private getMovieInfo(): void {
    this.loading = true;
    this.movieService.getMovie(this.movieId).subscribe((getResult: any) => {
      if(this.movieService.isError(getResult)) {
        // If there's an error, get the status message so it can be displayed
        this.errorMessage = getResult.error.status_message;
      } else {
        // If no error, get movie data
        this.movie = getResult;
      }
      this.loading = false;
    });
  }

  /**
   * Returns a placeholder if the field given is empty; also returns a converted number string if the movie's budget is passed in.
   * @param field 
   * @returns converted field string
   */
  getField(field: string | number): string {
    if (!field) {
      return this.fieldEmpty;
    } else {
      if (this.movie.budget === field) {
        return `$${this.movie.budget.toLocaleString()}`;
      }
      return field.toString();
    }
  }
}
