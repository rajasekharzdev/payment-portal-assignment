import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPayTransfer } from './quick-pay-transfer';

describe('QuickPayTransfer', () => {
  let component: QuickPayTransfer;
  let fixture: ComponentFixture<QuickPayTransfer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickPayTransfer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickPayTransfer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
