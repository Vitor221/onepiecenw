import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MenubarComponent } from './components/menubar/menubar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MenubarComponent,
    RouterModule
   ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
