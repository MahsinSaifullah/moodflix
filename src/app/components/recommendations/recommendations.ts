import { Component, DestroyRef, inject } from '@angular/core';
import { MoodService } from '../../services/mood.service';

@Component({
  selector: 'app-recommendations',
  imports: [],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.css',
})
export class Recommendations {
  private destroyRef = inject(DestroyRef);
  private moodService = inject(MoodService);

  selectedMood = this.moodService.selectedMood;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.moodService.resetMood();
    });
  }
}
