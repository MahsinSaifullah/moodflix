import { createSelector } from '@ngrx/store';
import { StoreState } from '../store.model';

export const selectRecommendation = (state: StoreState) => state.recommendation;

export const selectMoviesByMood = createSelector(
  selectRecommendation,
  (state) => state.moviesByMood
);

export const selectPopularMovies = createSelector(
  selectRecommendation,
  (state) => state.popularMovies
);
