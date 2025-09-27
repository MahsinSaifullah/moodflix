import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieApiService } from '../../services/movie-api.service';
import {
  doneFetchingMovies,
  errorOccurred,
  fetchMoviesByMood,
  setMoviesByMood,
  startFetchingMovies,
} from './recommendation.actions';
import { catchError, concatWith, exhaustMap, mergeMap, of } from 'rxjs';

export const fetchMoviesByMoodEffect = createEffect(
  (actions$ = inject(Actions), moviesApiService = inject(MovieApiService)) => {
    return actions$.pipe(
      ofType(fetchMoviesByMood),
      exhaustMap(({ mood, page }) => {
        return of(startFetchingMovies()).pipe(
          concatWith(
            moviesApiService.fetchMoviesByGenre(mood.tmdbGenreIds, page).pipe(
              mergeMap(({ results }) => [
                setMoviesByMood({ movies: results }),
                doneFetchingMovies(),
              ]),
              catchError(() => of(errorOccurred(), doneFetchingMovies()))
            )
          )
        );
      })
    );
  },
  { functional: true }
);
