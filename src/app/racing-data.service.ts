import { Injectable } from '@angular/core';
import { CARPARTS } from './mocks';

@Injectable()
export class RacingDataService {
  getCarParts() {
    return CARPARTS;
  }
}
