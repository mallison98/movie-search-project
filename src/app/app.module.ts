import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RoutingModule } from './routing/routing.module';
import { MovieInfoComponent } from './movie-info/movie-info.component'

@NgModule({
  declarations: [
    MovieListComponent,
    MovieSearchComponent,
    NavBarComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [NavBarComponent]
})
export class AppModule { }
