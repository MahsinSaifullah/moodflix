import { Mood } from '../models/mood.model';

export interface StoreState {
  mood: {
    selectedMood: Mood | null;
    randomMood: Mood | null;
  };
}
