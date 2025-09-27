import { createReducer, on } from '@ngrx/store';
import { resetMood, selectMood, selectRandomMood } from './mood.actions';
import { MoodState } from '../store.model';

export const initialMoodState: MoodState = {
  selectedMood: null,
  randomMood: null,
};

export const moodReducer = createReducer(
  initialMoodState,
  on(selectMood, (state, action) => ({ ...state, selectedMood: action.mood })),
  on(selectRandomMood, (state, action) => ({ ...state, randomMood: action.mood })),
  on(resetMood, (state) => ({ ...state, selectedMood: null, randomMood: null }))
);
