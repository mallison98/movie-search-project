import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { CoverDisplayDirective } from './cover-display.directive';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieSearchComponent,
    CoverDisplayDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MovieSearchComponent]
})
export class AppModule { }
