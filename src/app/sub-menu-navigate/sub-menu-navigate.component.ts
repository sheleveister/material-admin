import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sub-menu-navigate',
  templateUrl: './sub-menu-navigate.component.html',
  styleUrls: ['./sub-menu-navigate.component.scss']
})
export class SubMenuNavigateComponent implements OnInit {

  @Input() public title: string;
  constructor() { }

  ngOnInit() {
  }

}
