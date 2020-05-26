import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {TruckAPIResponse} from "../models/apiTruck";

const url = 'https://api.mystral.in/tt/mobile/logistics/searchTrucks?auth-company=PCH&companyId=33&deactivated=false&key=g2qb5jvucg7j8skpu5q7ria0mu&q-expand=true&q-include=lastRunningState,lastWaypoint'

@Injectable({
  providedIn: 'root'
})
export class TruckDataService {


  constructor(
    private http: HttpClient
  ) {
  }

  get trucks$(): Observable<TruckAPIResponse> {
    console.log("I am here")
    return this.http.get(url) as Observable<TruckAPIResponse>;
  }
}
