import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MyList } from './components/my-list/my-list';
import { Popular } from './components/popular/popular';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'my-list',
    component: MyList,
  },
  {
    path: 'popular',
    component: Popular,
  },
];
