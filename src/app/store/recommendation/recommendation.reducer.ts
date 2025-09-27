import { createReducer } from '@ngrx/store';
import { RecommendationState } from '../store.model';

export const initialMoodState: RecommendationState = {
  moviesByMood: null,
  popularMovies: null,
};

export const recommendationReducer = createReducer(initialMoodState);
