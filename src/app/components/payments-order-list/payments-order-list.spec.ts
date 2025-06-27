import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsOrderList } from './payments-order-list';

describe('PaymentsOrderList', () => {
  let component: PaymentsOrderList;
  let fixture: ComponentFixture<PaymentsOrderList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsOrderList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsOrderList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
