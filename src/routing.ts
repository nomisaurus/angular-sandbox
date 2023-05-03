import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MoviesComponent } from './components/movies/movies.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: AboutComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
];
