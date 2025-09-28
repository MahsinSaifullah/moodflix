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
  private readonly proxyBaseUrl = '/tmdbApi';

  fetchMoviesByGenre(genreIds: number[], page = 1) {
    const params = new HttpParams()
      .set('with_genres', genreIds.join(','))
      .set('page', page.toString());

    return this.http.get<MovieApiRequest>(`${this.proxyBaseUrl}/discover/movie`, {
      params,
    });
  }

  fetchPopularMovies(page = 1) {
    const params = new HttpParams().set('page', page.toString());

    return this.http.get<MovieApiRequest>(`${this.proxyBaseUrl}/movie/popular`, {
      params,
    });
  }

  getPosterUrl(posterPath: string, size: string = 'w500'): string | null {
    return `https://image.tmdb.org/t/p/${size}${posterPath}`;
  }
}
