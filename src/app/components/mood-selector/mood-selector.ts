import { Component, inject } from '@angular/core';
import { MoodService } from '../../services/mood.service';

@Component({
  selector: 'app-mood-selector',
  imports: [],
  templateUrl: './mood-selector.html',
  styleUrl: './mood-selector.css',
})
export class MoodSelector {
  private moodService = inject(MoodService);
  allMoods = this.moodService.getAllMoods();
}
