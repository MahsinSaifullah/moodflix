import { Component } from '@angular/core';
import { MoodSelector } from '../mood-selector/mood-selector';

@Component({
  selector: 'app-home',
  imports: [MoodSelector],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
