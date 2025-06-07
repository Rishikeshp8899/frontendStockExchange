import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDashboardAppComponent } from './company-dashboard-app.component';

describe('CompanyDashboardAppComponent', () => {
  let component: CompanyDashboardAppComponent;
  let fixture: ComponentFixture<CompanyDashboardAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDashboardAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDashboardAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
