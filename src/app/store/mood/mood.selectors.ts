import { createSelector } from '@ngrx/store';
import { StoreState } from '../store.model';

export const selectMood = (state: StoreState) => state.mood;

export const selectSelectedMood = createSelector(selectMood, (state) => state.selectedMood);
export const selectRandomMood = createSelector(selectMood, (state) => state.randomMood);
