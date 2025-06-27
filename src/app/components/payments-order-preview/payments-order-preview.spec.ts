import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsOrderPreview } from './payments-order-preview';

describe('PaymentsOrderPreview', () => {
  let component: PaymentsOrderPreview;
  let fixture: ComponentFixture<PaymentsOrderPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsOrderPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsOrderPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
