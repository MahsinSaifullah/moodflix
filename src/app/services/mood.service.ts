import { inject, Injectable } from '@angular/core';
import { Mood } from '../models/mood.model';
import { Store } from '@ngrx/store';
import { selectSelectedMood } from '../store/mood/mood.selectors';
import { selectMood, selectRandomMood } from '../store/mood/mood.actions';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  private store = inject(Store);
  readonly moods: Mood[] = [
    {
      name: 'Happy',
      emoji: '😀',
      tmdbGenreIds: [35, 10751], // Comedy, Family
    },
    {
      name: 'Sad',
      emoji: '😢',
      tmdbGenreIds: [18, 10749], // Drama, Romance
    },
    {
      name: 'Excited',
      emoji: '🤩',
      tmdbGenreIds: [28, 12, 878], // Action, Adventure, Sci-Fi
    },
    {
      name: 'Curious',
      emoji: '🧐',
      tmdbGenreIds: [9648, 878], // Mystery, Sci-Fi
    },
    {
      name: 'Angry',
      emoji: '😤',
      tmdbGenreIds: [53, 28, 18], // Thriller, Action, Drama
    },
    {
      name: 'Romantic',
      emoji: '🥰',
      tmdbGenreIds: [10749, 35], // Romance, Comedy
    },
  ];

  readonly selectedMood = this.store.selectSignal(selectSelectedMood);
  readonly randomMood = this.store.selectSignal(selectRandomMood);

  selectMood(mood: Mood) {
    this.store.dispatch(selectMood({ mood }));
  }

  selectRandomMood() {
    this.store.dispatch(selectRandomMood({ mood: this.getRandomObject<Mood>(this.moods) }));
  }

  private getRandomObject<T>(arr: T[]): T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
}
