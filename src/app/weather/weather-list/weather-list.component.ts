import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent {
  @Input() public weather: Weather;
  @Input() public position: number;
}
