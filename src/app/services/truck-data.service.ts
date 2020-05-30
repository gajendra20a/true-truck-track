import {AddTruckComponent, TruckData} from './../components/add-truck/add-truck.component';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {APITruck, APITruckWithStatus, TruckAPIResponse} from '../models/apiTruck';
import {map, share, tap} from 'rxjs/operators';

const url = 'http://13.232.181.67:8080/tt/mobile/logistics/searchTrucks?auth-company=pbh&key=bmked1lou9ome2veh2jirgih5s&companyId=101&q-expand=true&q-include=lastRunningState,lastWaypoint';
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

  private trucks$$ = new BehaviorSubject<APITruckWithStatus[]>([]);
  private filter$$ = new BehaviorSubject<String>(total);

  constructor(
    private http: HttpClient
  ) {
    this.loadTrucks();
  }

  public updateFilter(filter: string) {
    console.log('I am getting called to set correct filter');
    this.filter$$.next(filter);
  }

  private loadTrucks() {
    (this.http.get(url) as Observable<TruckAPIResponse>)
      .pipe(
        map((response) => {
          const trucksWithStatus: APITruckWithStatus[] = [];
          response.data.forEach((truck) => {
            trucksWithStatus.push({
              ...truck,
              status: this.getTruckType(truck)
            });
          });
          return trucksWithStatus;
        }),
      ).subscribe((trucks) => {
      this.trucks$$.next(trucks);
    });
  }

  get trucks$(): Observable<APITruckWithStatus[]> {
    return this.trucks$$.asObservable().pipe(
      share()
    );
  }

  public get listTrucks(): Observable<APITruckWithStatus[]> {
    return combineLatest([
      this.trucks$$.asObservable(),
      this.filter$$.asObservable(),
    ]).pipe(
      tap(() => console.log('I am filtering data')),
      map(([trucks, filter]) => {
        if (filter === total) {
          return trucks;
        } else {
          return trucks.filter((truck) => truck.status === filter);
        }
      })
    );
  }


  addNewTruck(data: any) {
    const response: APITruck = {
      name: data.tName,
      truckNumber: data.tNumber
    };
    return this.http.post<APITruck>(urlPost, response).subscribe(() => {
      this.loadTrucks();
    });
  }

  private getTruckType(truck: APITruck): string {
    const runningState = truck.lastRunningState?.truckRunningState;
    const ignitionOn = truck.lastWaypoint?.ignitionOn;

    if (runningState && ignitionOn) {
      return running;
    } else if (!runningState && ignitionOn) {
      return idle;
    }
    return stopped;
  }
}
