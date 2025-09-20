import { Injectable } from '@angular/core';
import { Mood } from '../models/mood.model';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  private readonly moods: Mood[] = [
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

  getAllMoods() {
    return this.moods;
  }
}
