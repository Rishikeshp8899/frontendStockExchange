import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRegistrationAppComponent } from './company-registration-app.component';

describe('CompanyRegistrationAppComponent', () => {
  let component: CompanyRegistrationAppComponent;
  let fixture: ComponentFixture<CompanyRegistrationAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyRegistrationAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyRegistrationAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
