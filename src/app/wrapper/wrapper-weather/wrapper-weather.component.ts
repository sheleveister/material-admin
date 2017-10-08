import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { weather$ } from '../../data/weather';

@Component({
  selector: 'app-wrapper-weather',
  templateUrl: './wrapper-weather.component.html',
  styleUrls: ['./wrapper-weather.component.scss']
})
export class WrapperWeatherComponent {

  public text: string;
  public placeholder: string = 'Search term';
  public title: string = 'Hot Weather Widget';

  public weather$: Observable<Weather[]> = weather$;

}
