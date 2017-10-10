import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherFilter'
})

export class FilterWeatherPipe implements PipeTransform {
  public transform(weathers: Weather[], tabTerm: string): Weather[] {
    if (!tabTerm) {
      return weathers;
    }
    return weathers.filter((weather: Weather) =>
    `${weather.type}${weather.id}`.includes(tabTerm));
  }

}
