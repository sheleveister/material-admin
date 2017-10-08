import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper-table',
  templateUrl: './wrapper-table.component.html',
  styleUrls: ['./wrapper-table.component.scss']
})
export class WrapperTableComponent implements OnInit {

  public title: string = 'Table';
  public text: string;
  public placeholder: string = 'Search term';

  constructor() { }

  ngOnInit() {
  }

}
