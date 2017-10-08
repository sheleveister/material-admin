import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper-left-sidebar',
  templateUrl: './wrapper-left-sidebar.component.html',
  styleUrls: ['./wrapper-left-sidebar.component.scss']
})
export class WrapperLeftSidebarComponent implements OnInit {

  public title: string = 'Left sidebar';
  public text: string;
  public placeholder: string = 'Search term';

  constructor() { }

  ngOnInit() {
  }

}
