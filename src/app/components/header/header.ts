import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() incorporationName = 'N and F solutions';
  faGear = faGear;
  // color

  // changeSettings() {

  // }
}
