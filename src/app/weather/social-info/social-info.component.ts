import { Component, Input } from '@angular/core';

@Component({
  selector: 'social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent {

  @Input() public weather: Weather;

}
