import { Component } from '@angular/core';
import { RacingDataService } from './racing-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RacingDataService]
})
export class AppComponent {
  title = 'Welcome to racing';
}
