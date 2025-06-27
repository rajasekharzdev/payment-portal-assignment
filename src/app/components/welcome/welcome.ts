import { Component } from '@angular/core';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-welcome',
  imports: [Footer],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
export class Welcome {}
