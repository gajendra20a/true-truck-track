export interface ResponseCode {
  responseCode: number;
  message: string;
}

export interface LastWaypoint {
  id: number;
  lat: number;
  lng: number;
  createTime: any;
  accuracy: number;
  bearing: number;
  truckId: number;
  speed: number;
  updateTime: any;
  ignitionOn: boolean;
  odometerReading: number;
  batteryPower: boolean;
  fuelLevel: number;
  batteryLevel: number;
}

export interface LastRunningState {
  truckId: number;
  stopStartTime: any;
  truckRunningState: number;
  lat: number;
  lng: number;
  stopNotficationSent: number;
}

export interface APITruck {
  id?: number;
  companyId?: number;
  truckTypeId?: number;
  truckSizeId?: number;
  truckNumber: string;
  transporterId?: number;
  trackerType?: number;
  imeiNumber?: string;
  simNumber?: string;
  name: string;
  password?: string;
  createTime?: any;
  deactivated?: boolean;
  lastWaypoint?: LastWaypoint;
  lastRunningState?: LastRunningState;
  durationInsideSite?: number;
  fuelSensorInstalled?: boolean;
  externalTruck?: boolean;
}

export interface TruckAPIResponse {
  responseCode: ResponseCode;
  data: APITruck[];
}

export interface APITruckWithStatus extends APITruck{
  status: string;
}
