import { createAction, props } from '@ngrx/store';
import { Mood } from '../../models/mood.model';
import { Movie } from '../../models/movie.model';

export const fetchMoviesByMood = createAction(
  '[Recommendation] Fetch Movies By Mood',
  props<{ mood: Mood; page: number }>()
);
export const setMoviesByMood = createAction(
  '[Recommendation] Set Movies By Mood',
  props<{ movies: Movie[] }>()
);
export const fetchPopularMovies = createAction('[Recommendation] Fetch Popular Movies');
export const setPopularMovies = createAction(
  '[Recommendation] Set Popular Movies',
  props<{ movies: Movie[] }>()
);
export const startFetchingMovies = createAction('[Recommendation] Start Fetching Movies');
export const doneFetchingMovies = createAction('[Recommendation] Done Fetching Movies');
export const errorOccurred = createAction('[Recommendation] Error Occurred');
export const resetRecommendation = createAction('[Recommendation] Reset Recommendation');
