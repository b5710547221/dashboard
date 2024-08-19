import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getEmployee(): Observable<any> {
    return this.httpClient.get('https://sanko-be.vercel.app/employees');
  }
}
