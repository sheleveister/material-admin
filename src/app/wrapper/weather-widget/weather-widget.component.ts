import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

  public text: string;
  public placeholder: string = 'Search term';
  public title: string = 'Hot Weather Widget';

  public constructor() { }

  public ngOnInit() {
  }

}
