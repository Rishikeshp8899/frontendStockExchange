import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
private apiUrl = 'http://localhost:7000/company/addCompanyRegistration';

  constructor(private http: HttpClient) { }

  addCompanyRegistration(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

}
