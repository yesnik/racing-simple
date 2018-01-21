import { Injectable } from '@angular/core';
import { CARPARTS } from './mocks';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RacingDataService {
  getCarParts() {
    return CARPARTS;
  }

  constructor(private http: HttpClient) { }
}
