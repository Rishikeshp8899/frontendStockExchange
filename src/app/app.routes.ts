import { Routes } from '@angular/router';
import {CompanyRegistrationAppComponent} from './company-registration-app/company-registration-app.component';
import {CompanyDashboardAppComponent} from './company-dashboard-app/company-dashboard-app.component';
import {CompanyComponent} from './company/company.component';
import {ChartContainerComponent} from './chart-container/chart-container.component';


export const routes: Routes = [

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
      }
    ]
  }
    ]
  }

];
