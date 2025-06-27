import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { PaymentsOrderPreview } from './components/payments-order-preview/payments-order-preview';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Body, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'payment-portal-assignment';
}
