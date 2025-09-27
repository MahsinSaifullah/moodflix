import { createReducer, on } from '@ngrx/store';
import { RecommendationState } from '../store.model';
import {
  doneFetchingMovies,
  errorOccurred,
  resetRecommendation,
  setMoviesByMood,
  setPopularMovies,
  startFetchingMovies,
} from './recommendation.actions';

export const initialMoodState: RecommendationState = {
  moviesByMood: null,
  popularMovies: null,
  isFetchingMovies: false,
  hasErrorOccurred: false,
};

export const recommendationReducer = createReducer(
  initialMoodState,
  on(setMoviesByMood, (state, action) => ({
    ...state,
    moviesByMood: action.movies,
  })),
  on(setPopularMovies, (state, action) => ({
    ...state,
    popularMovies: action.movies,
  })),
  on(startFetchingMovies, (state) => ({
    ...state,
    isFetchingMovies: true,
  })),
  on(doneFetchingMovies, (state) => ({
    ...state,
    isFetchingMovies: false,
  })),
  on(errorOccurred, (state) => ({
    ...state,
    hasErrorOccurred: true,
  })),
  on(resetRecommendation, (state) => initialMoodState)
);
