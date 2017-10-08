import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper-form',
  templateUrl: './wrapper-form.component.html',
  styleUrls: ['./wrapper-form.component.scss']
})
export class WrapperFormComponent implements OnInit {
  public title: string = 'Form';
  public text: string;
  public placeholder: string = 'Search term';

  constructor() { }

  ngOnInit() {
  }

}
