import { Component } from '@angular/core';
import { PaymentsOrderPreview } from '../payments-order-preview/payments-order-preview';
import {
  faCircleDollarToSlot,
  faFileInvoiceDollar,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Footer } from '../footer/footer';
import { QuickPayTransfer } from '../quick-pay-transfer/quick-pay-transfer';

@Component({
  selector: 'app-body',
  imports: [
    PaymentsOrderPreview,
    FontAwesomeModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    QuickPayTransfer,
  ],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {
  faFileInvoiceDollar = faFileInvoiceDollar;
  faWallet = faWallet;
  faCircleDollarToSlot = faCircleDollarToSlot;
  suppliers = new FormControl('');
  payments = new FormControl('');

  supplierList: string[] = ['RBC', 'TD', 'BMO'];
  paymentMethodList: string[] = ['e-transfer', 'mobile', 'paypal'];

  constructor(private router: Router) {}

  navigatePaymentList() {
    this.router.navigate(['/paymentOrderList']);
  }
}
