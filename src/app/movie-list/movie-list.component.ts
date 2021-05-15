import { Component, OnInit, Input } from '@angular/core';
import { MovieResult } from '../movie-result';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies: MovieResult[] = [];
  showCover = false;
  coverPath = null;

  constructor() { }

  ngOnInit(): void {
  }

  setCoverPath(path: string):void {
    this.coverPath = path;
  }
}
