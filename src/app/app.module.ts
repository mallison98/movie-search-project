import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverDisplayComponent } from './cover-display/cover-display.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatSearchComponent } from './mat-search/mat-search.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieSearchComponent,
    CoverDisplayComponent,
    NavBarComponent,
    MatSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [MovieSearchComponent]
})
export class AppModule { }
