import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onepiecnw';
}
