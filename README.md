# Movie Search

## What is this?
This app allows you to search movies using [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction). Type in the search bar to search; go to different pages of results using the arrows to the right of the search bar. You can hover over the cover of a movie in the search results to view a larger version of it. Click on the cover or title of a search result to view details.

## Other features
- The search only allows alphanumeric characters (and spaces). It'll display an error message if the user tries to use other characters when searching.
- If the search or get API calls return with an error, the error message will be displayed.
- It's mobile-friendly! According to Chrome's mobile view at least. It doesn't look awful.

## How do I run it?
1. Install Node.js
2. `npm install -g @angular/cli` to install the Angular CLI if you don't already have it.
3. `npm i` on the repo to install dependencies.
4. `ng serve -o` to host the app; it'll open a new tab in your browser to `http://localhost:4200/`.