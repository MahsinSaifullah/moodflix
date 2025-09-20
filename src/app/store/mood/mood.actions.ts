import { createAction, props } from '@ngrx/store';
import { Mood } from '../../models/mood.model';

export const selectMood = createAction('[Mood] Select Mood', props<{ mood: Mood }>());
export const resetMood = createAction('[Mood] Reset Mood');
export const selectRandomMood = createAction('[Mood] Select Random Mood', props<{ mood: Mood }>());
export const resetRandomMood = createAction('[Mood] Reset Random Mood');
