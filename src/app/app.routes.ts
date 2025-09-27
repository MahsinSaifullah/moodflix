import { CanActivateFn, Router, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MyList } from './components/my-list/my-list';
import { Popular } from './components/popular/popular';
import { Recommendations } from './components/recommendations/recommendations';
import { inject } from '@angular/core';
import { MoodService } from './services/mood.service';

const moodGuard: CanActivateFn = () => {
  const moodService = inject(MoodService);
  const router = inject(Router);

  const selectedMood = moodService.selectedMood;

  if (selectedMood()) {
    return true;
  }

  router.navigate(['/']);
  return false;
};

export enum AppRoutes {
  MyList = 'my-list',
  Popular = 'popular',
  Recommendations = 'recommendations',
}

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: AppRoutes.MyList,
    component: MyList,
  },
  {
    path: AppRoutes.Popular,
    component: Popular,
  },
  {
    path: `${AppRoutes.Recommendations}/:mood`,
    component: Recommendations,
    canActivate: [moodGuard],
  },
];
