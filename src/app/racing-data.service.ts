import { CarPart } from './car-part';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CarPartsResponse {
  data: CarPart[];
}

@Injectable()
export class RacingDataService {
  constructor(private http: HttpClient) { }

  getCarParts() {
    return this.http.get<CarPartsResponse>('/assets/data/car-parts.json')
  }
}
