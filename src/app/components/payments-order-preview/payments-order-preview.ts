import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowLeft, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payments-order-preview',
  imports: [FontAwesomeModule],
  templateUrl: './payments-order-preview.html',
  styleUrl: './payments-order-preview.scss',
})
export class PaymentsOrderPreview {
  faCircleArrowLeft = faCircleArrowLeft;
}
