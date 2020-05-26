import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TruckDataService {

  createDb() {
    const trucks = [
      { count: 4, name: 'HR 38T 3170', delay:'hr' },
      { count: 2, name: 'PB 10FF 4982', delay:'d' },
      { count: 3, name: 'HR 38T 3170', delay:'hr' },
      { count: 1, name: 'PB 10FV 8256', delay:'d' },
      { count: 5, name: 'PB 10FF 5485', delay:'d' },
      { count: 2, name: 'HR 38T 3170', delay:'d' },
      { count: 1, name: 'PB 10FF 6688', delay:'d' },
      { count: 2, name: 'HR 38T 3170', delay:'d' },
      { count: 9, name: 'HR 38T 3170', delay:'hr' },
      { count: 20, name: 'HR 38T 3170', delay:'hr' }
    ];
    return {trucks};
  }

  getTrucks() {
    return this.http.get('https://api.mystral.in/tt/mobile/logistics/searchTrucks?auth-company=PCH&companyId=33&deactivated=false&key=g2qb5jvucg7j8skpu5q7ria0mu&q-expand=true&q-include=lastRunningState,lastWaypoint');
  }

  constructor(
    private http: HttpClient
  ) { }
}
