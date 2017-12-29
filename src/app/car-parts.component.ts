import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']

})
export class CarPartsComponent {
  title = 'Welcome to racing';
  carParts: CarPart[];

  ngOnInit() {
    this.carParts = CARPARTS;
  }

  totalCarParts() {
    let sum = 0;
    for(let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;
  }
}
