import { inject, Injectable } from '@angular/core';
import { MoodService } from './mood.service';
import { Store } from '@ngrx/store';
import { StoreState } from '../store/store.model';
import {
  fetchMoviesByMood,
  fetchPopularMovies,
} from '../store/recommendation/recommendation.actions';
import {
  selectHasErrorOccurred,
  selectIsFetchingMovies,
  selectMoviesByMood,
  selectPopularMovies,
} from '../store/recommendation/recommendation.selectors';

@Injectable({
  providedIn: 'root',
})
export class RecommendationService {
  private store = inject(Store<StoreState>);
  private moodService = inject(MoodService);
  private selectedMood = this.moodService.selectedMood;

  readonly moviesByMood = this.store.selectSignal(selectMoviesByMood);
  readonly popularMovies = this.store.selectSignal(selectPopularMovies);
  readonly isFetchingMovies = this.store.selectSignal(selectIsFetchingMovies);
  readonly hasErrorOccurred = this.store.selectSignal(selectHasErrorOccurred);

  getRecommendationForMood(page = 1) {
    const mood = this.selectedMood();
    if (!mood) {
      return;
    }

    this.store.dispatch(fetchMoviesByMood({ mood, page }));
  }

  getPopularRecommendation(page = 1) {
    this.store.dispatch(fetchPopularMovies({ page }));
  }
}
