import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

const dataWeather: Weather[] = [
  {
    'img': 'assets/img/weather-01.jpg',
    'address': 'Westbahnstraße 42, 07',
    'phone': 1285968685,
    'weather': {
      'title': 'Schreiners Essen und Wohnen',
      'icon': 'assets/img/cloudy.png',
      'water': 25,
      'temperature': 35
    },
    'social_info': {
      'title': 'Nam libero voluptatem',
      'img': 'assets/img/weather-01.jpg',
      'followers': 400,
      'following': 587
    },
    'type': 'Hotel'
  },
  {
    'img': 'assets/img/weather-02.jpg',
    'address': 'Philharmoniker-Straße 4, 01',
    'phone': 1385968685,
    'weather': {
      'title': 'Tours Sacher Wien',
      'icon': 'assets/img/cloudy.png',
      'water': 15,
      'temperature': 21
    },
    'social_info': {
      'title': 'Tours Sacher Wien',
      'img': 'assets/img/weather-02.jpg',
      'followers': 200,
      'following': 155
    },
    'type': 'Tours'
  },
  {
    'img': 'assets/img/weather-03.jpg',
    'address': 'Mariahilfer Straße 15, 06',
    'phone': 1485968685,
    'weather': {
      'title': 'Fishing Boutiquehotel Das Tyrol',
      'icon': 'assets/img/cloudy.png',
      'water': 32,
      'temperature': 38
    },
    'social_info': {
      'title': 'Boutiquehotel Das Tyrol',
      'img': 'assets/img/weather-03.jpg',
      'followers': 678,
      'following': 899
    },
    'type': 'Fishing'
  }
];

export const weather$: Observable<Weather[]> = Observable.of(dataWeather);
