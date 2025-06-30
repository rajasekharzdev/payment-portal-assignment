import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quick-pay-transfer',
  imports: [
    FontAwesomeModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './quick-pay-transfer.html',
  styleUrl: './quick-pay-transfer.scss',
})
export class QuickPayTransfer {
  faCircleDollarToSlot = faCircleDollarToSlot;
  suppliers = new FormControl('');
  payments = new FormControl('');

  supplierList: string[] = ['RBC', 'TD', 'BMO'];
  paymentMethodList: string[] = ['e-transfer', 'mobile', 'paypal'];
}
