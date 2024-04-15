import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
