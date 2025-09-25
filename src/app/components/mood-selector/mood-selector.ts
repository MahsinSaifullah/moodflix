import { Component, inject } from '@angular/core';
import { MoodService } from '../../services/mood.service';
import { NgClass } from '@angular/common';
import { Mood } from '../../models/mood.model';
import { Router } from '@angular/router';
import { AppRoutes } from '../../app.routes';

@Component({
  selector: 'app-mood-selector',
  imports: [NgClass],
  templateUrl: './mood-selector.html',
  styleUrl: './mood-selector.css',
})
export class MoodSelector {
  private moodService = inject(MoodService);
  private router = inject(Router);
  allMoods = this.moodService.moods;
  selectedMood = this.moodService.selectedMood;

  onSelectMood(mood: Mood) {
    this.moodService.selectMood(mood);
  }

  onGetRecommendations() {
    console.log('---selectedMood:', this.selectedMood());
    if (!this.selectedMood()) {
      return;
    }

    this.router.navigate([AppRoutes.Recommendations, this.selectedMood()?.name.toLowerCase()]);
  }
}
