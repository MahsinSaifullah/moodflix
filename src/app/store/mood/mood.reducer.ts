import { createReducer, on } from '@ngrx/store';
import { Mood } from '../../models/mood.model';
import { resetMood, resetRandomMood, selectMood, selectRandomMood } from './mood.actions';

export interface MoodState {
  selectedMood: Mood | null;
  randomMood: Mood | null;
}

export const initialMoodState: MoodState = {
  selectedMood: null,
  randomMood: null,
};

export const moodReducer = createReducer(
  initialMoodState,
  on(selectMood, (state, action) => ({ ...state, selectedMood: action.mood })),
  on(resetMood, (state) => ({ ...state, selectedMood: null })),
  on(selectRandomMood, (state, action) => ({ ...state, randomMood: action.mood })),
  on(resetRandomMood, (state) => ({ ...state, randomMood: null }))
);
