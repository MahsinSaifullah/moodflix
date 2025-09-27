import { Mood } from '../models/mood.model';
import { Movie } from '../models/movie.model';

export interface MoodState {
  selectedMood: Mood | null;
  randomMood: Mood | null;
}

export interface RecommendationState {
  moviesByMood: Movie[] | null;
  popularMovies: Movie[] | null;
  isFetchingMovies: boolean;
  hasErrorOccurred: boolean;
}

export interface StoreState {
  mood: MoodState;
  recommendation: RecommendationState;
}
