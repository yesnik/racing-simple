import { Component } from '@angular/core';
import { CarPart } from './car-part';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']

})
export class CarPartsComponent {
  title = 'Welcome to racing';
  carParts: CarPart[] = [{
    id: 1,
    name: 'Super tires',
    description: 'Some description for tires',
    inStock: 0,
    price: 5.34,
    updatedOn: '2017-11-25'
  },
  {
    id: 2,
    name: 'Super breaks',
    description: 'They will help you even on absolutely iced road',
    inStock: 22,
    price: 10.2,
    updatedOn: '2017-01-15'
  },
  {
    id: 3,
    name: 'Ultra windshield',
    description: 'Booletprolf windshield for your super fast car',
    inStock: 7,
    price: 28.0,
    updatedOn: '2017-05-21'
  }
  ]

  totalCarParts() {
    let sum = 0;
    for(let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;
  }
}
