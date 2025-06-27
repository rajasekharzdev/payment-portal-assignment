import { Routes } from '@angular/router';
import { Body } from './components/body/body';
import { PaymentsOrderList } from './components/payments-order-list/payments-order-list';
import { Welcome } from './components/welcome/welcome';

export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'dashboard', component: Body },
  { path: 'paymentOrderList', component: PaymentsOrderList },
];
