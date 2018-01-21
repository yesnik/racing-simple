import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { RacingDataService } from './racing-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']

})
export class CarPartsComponent {
  title = 'Welcome to racing';
  carParts: CarPart[];

  ngOnInit() {
    this.racingDataService.getCarParts().
      subscribe(response => this.carParts = response.data);
  }

  constructor(
    private racingDataService: RacingDataService,
    private http: HttpClient
  ) {}

  totalCarParts() {
    let sum = 0;

    if (!this.carParts) {
      return 0;
    }

    for(let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;
  }

  upQuantity(carPart) {
    if (carPart.quantity < carPart.inStock) {
      carPart.quantity += 1;
    }
  }

  downQuantity(carPart) {
    if (carPart.quantity > 0) {
      carPart.quantity -= 1;
    }
  }

  showKey(event) {
    alert(event.keyCode);
  }

  getCoordinates(event) {
    console.log(event.clientX + ' ' + event.clientY);
  }
}
