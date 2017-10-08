import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper-cards',
  templateUrl: './wrapper-cards.component.html',
  styleUrls: ['./wrapper-cards.component.scss']
})
export class WrapperCardsComponent implements OnInit {

  public title: string = 'Cards';
  public text: string;
  public placeholder: string = 'Search term';

  constructor() { }

  ngOnInit() {
  }

}
