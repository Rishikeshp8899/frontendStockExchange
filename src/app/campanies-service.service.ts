import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { CompanyHolding } from './models/company.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaniesServiceService {

    private baseUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getCompaniesCurrentData(page: number):Observable<CompanyHolding[]> {
    const limit = 10;
    const skip = (page - 1) * limit;
    const url = `${this.baseUrl}?limit=${limit}&skip=${skip}`;
    return this.http.get<any>(url).pipe(  map(response => {
        const users = response?.users ?? [];
        return users.map((user: any) => ({
          image: user.image,
          name: user.firstName + ' company', // mock company name
          price: user.height ?? 1000          // mock price using height
        }));
      }));
  }
}