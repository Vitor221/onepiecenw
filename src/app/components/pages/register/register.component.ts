import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgHeroiconsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
