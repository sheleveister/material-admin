import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { weather$ } from '../../data/weather';

@Component({
  selector: 'app-wrapper-weather',
  templateUrl: './wrapper-weather.component.html',
  styleUrls: ['./wrapper-weather.component.scss']
})
export class WrapperWeatherComponent implements OnInit {

  public text: string;
  public placeholder: string = 'Search term';
  public title: string = 'Hot Weather Widget';
  public mariahilfer: string = 'Tours';
  public weatherId: string = '1';

  public weather$: Observable<Weather[]> = weather$;

  public ngOnInit(): void {
  }

  public getWeatherType(textWeather: string): string {
    if (textWeather === 'All') {
      return this.mariahilfer = '';
    }

    switch (textWeather) {
      case 'Hotel':
        this.weatherId = '1';
        break;
      case 'Tours':
        this.weatherId = '2';
        break;
      case 'Fishing':
        this.weatherId = '3';
        break;
      case '':
        this.weatherId = '1';
        break;
    }
    return this.mariahilfer = textWeather;
  }

}
