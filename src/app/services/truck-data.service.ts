import { AddTruckComponent } from './../components/add-truck/add-truck.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APITruck, TruckAPIResponse } from '../models/apiTruck';

const url = 'https://api.mystral.in/tt/mobile/logistics/searchTrucks?auth-company=PCH&companyId=33&deactivated=false&key=g2qb5jvucg7j8skpu5q7ria0mu&q-expand=true&q-include=lastRunningState,lastWaypoint'
const urlPost = 'http://13.232.181.67:8080/tt/mobile/logistics/createTruck?auth-company=pbh&key=bmked1lou9ome2veh2jirgih5s';
export const total = 'Total';
export const running = 'Running';
export const stopped = 'Stopped';
export const idle = 'Idle';
export const error = 'Error';

@Injectable({
  providedIn: 'root'
})
export class TruckDataService {

  constructor(
    private http: HttpClient
  ) { }

  get trucks$(): Observable<TruckAPIResponse> {
    return this.http.get(url) as Observable<TruckAPIResponse>;
  }

  addNewTruck(data: any){
    const response: APITruck  = {
        name: data.tName,
        truckNumber: data.tNumber
    };
    return this.http.post<APITruck>(urlPost, response).subscribe();
  }

  public getTruckType(truck: APITruck): string {
    const runningState = truck.lastRunningState.truckRunningState;
    const ignitionOn = truck.lastWaypoint.ignitionOn;

    if (runningState && ignitionOn) {
      return running;
    }
    else if ( !runningState && ignitionOn ){
      return idle;
    }
    return stopped;
  }
}