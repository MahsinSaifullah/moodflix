import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

interface MovieApiRequest {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly apiToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDZhNDI1M2Y3NGM2MWE3NjEwNGJiMzNkNzIxMzhiOCIsIm5iZiI6MTY2MTk3NDkxMy40OTUwMDAxLCJzdWIiOiI2MzBmYjk4MWQ3YTcwYTAwN2UxYmE5ODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.J2ny-I48Ea2SnqN7SETJklWAjicA0T_ljJaCBFbFGBM';

  private readonly defaultHeaders = new HttpHeaders({
    accept: 'application/json',
    Autherization: `Bearer ${this.apiToken}`,
  });

  fetchMoviesByGenre(genreIds: number[], page = 1) {
    const params = new HttpParams()
      .set('with_genres', genreIds.join(','))
      .set('page', page.toString());

    return this.http.get<MovieApiRequest>(`${this.baseUrl}/discover/movie`, {
      headers: this.defaultHeaders,
      params,
    });
  }

  fetchPopularMovies(page = 1) {
    const params = new HttpParams().set('page', page.toString());

    return this.http.get<MovieApiRequest>(`${this.baseUrl}/movie/popular`, {
      headers: this.defaultHeaders,
      params,
    });
  }

  getPosterUrl(posterPath: string | null, size: string = 'w500'): string | null {
    if (!posterPath) return null;
    return `https://image.tmdb.org/t/p/${size}${posterPath}`;
  }
}
