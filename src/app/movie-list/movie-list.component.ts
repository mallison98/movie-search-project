import { Component, OnInit, Input } from '@angular/core';
import { MovieResult } from '../models/movie-result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies: MovieResult[] = [];
  showCover = false;
  coverPath = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Sets image path for the cover being hovered over.
   * @param path 
   */
  setCoverPath(path: string):void {
    this.coverPath = path;
  }

  /**
   * Routes to the movie info page, given the id of the movie that was clicked.
   * @param movieId 
   */
  goToInfo(movieId: number):void {
    this.router.navigate(['/movie-info', movieId]);
  }
}
