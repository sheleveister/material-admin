import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper-dashboard',
  templateUrl: './wrapper-dashboard.component.html',
  styleUrls: ['./wrapper-dashboard.component.scss']
})
export class WrapperDashboardComponent implements OnInit {

  public title: string = 'Dashboard';
  public text: string;
  public placeholder: string = 'Search term';

  constructor() { }

  ngOnInit() {
  }

}
