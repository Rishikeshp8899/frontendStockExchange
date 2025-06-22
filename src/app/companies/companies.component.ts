import { Component, OnInit } from '@angular/core';
import { CampaniesServiceService } from '../campanies-service.service';
import { CompanyHolding } from '../models/company.model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-companies',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{
  companies: CompanyHolding[] = [];
  name: string = " ";

setName(name:string){
  this.name = name;
  console.log('Clicked name set to:', name);
}

  constructor(private companiesService: CampaniesServiceService) {}

  ngOnInit(): void {
    this.getCompanies(1);
  }

  getCompanies(page:number):void{
     this.companiesService.getCompaniesCurrentData(10).subscribe({
      next: (data: CompanyHolding[]) => {
        this.companies = data;
      },
      error: (err) => {
        console.error('❌ Error fetching companies:', err);
      }
    });
  }

}
