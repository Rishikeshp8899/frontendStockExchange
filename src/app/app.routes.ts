import { Routes } from '@angular/router';
import {CompanyRegistrationAppComponent} from './company-registration-app/company-registration-app.component';
import {CompanyDashboardAppComponent} from './company-dashboard-app/company-dashboard-app.component';
import {CompanyComponent} from './company/company.component';
import {ChartContainerComponent} from './chart-container/chart-container.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { CompaniesComponent } from './companies/companies.component';
import { TestButtonComponent } from './test-button/test-button.component';

export const routes: Routes = [
  {
    path:'test',
    component:TestButtonComponent
  },

  {
    path:'company',
    component:CompanyComponent,
    children:[
        {
    path:'register' , component:CompanyRegistrationAppComponent
  },{
    path:'dashboard',component:CompanyDashboardAppComponent,
    children:[
      {
        path:'chart',component:ChartContainerComponent
      },
       {
        path:'holdings',component:HoldingsComponent
      },
       {
        path:'companies',component:CompaniesComponent
      }
    ]
  }
    ]
  }

];
