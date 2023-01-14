import { Injectable } from "@angular/core";
import {Location} from "../models/location";

@Injectable({ providedIn: 'root' })
export class LocationService {

  locations: Location[] = [
    {
      address: 'BT Arena',
      latitude: 46.767052,
      longitude: 23.570519
    },
    {
      address: 'Parcul sala sporturilor',
      latitude: 46.765468,
      longitude: 23.561321
    },
    {
      address: 'UTCN Zorilor',
      latitude: 46.756042,
      longitude: 23.590587
    }
  ];

  getAll(): Location[] {
    return this.locations;
  }

}
