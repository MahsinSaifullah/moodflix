import { Component, inject } from '@angular/core';
import { MoodService } from '../../services/mood.service';
import { NgClass } from '@angular/common';
import { Mood } from '../../models/mood.model';

@Component({
  selector: 'app-mood-selector',
  imports: [NgClass],
  templateUrl: './mood-selector.html',
  styleUrl: './mood-selector.css',
})
export class MoodSelector {
  private moodService = inject(MoodService);
  allMoods = this.moodService.moods;
  selectedMood = this.moodService.selectedMood;

  onSelectMood(mood: Mood) {
    this.moodService.selectMood(mood);
  }
}
