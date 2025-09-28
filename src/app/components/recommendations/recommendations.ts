import { Component, DestroyRef, effect, inject } from '@angular/core';
import { MoodService } from '../../services/mood.service';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-recommendations',
  imports: [],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.css',
})
export class Recommendations {
  private destroyRef = inject(DestroyRef);
  private moodService = inject(MoodService);
  private recommendationService = inject(RecommendationService);

  selectedMood = this.moodService.selectedMood;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.moodService.resetMood();
    });

    effect(() => {
      console.log(this.recommendationService.moviesByMood());
    });
  }
}
