import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list.component';

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MovieListComponent]
})
export class AppModule { }
