import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})

export class MenuComponent {
  @Input() public placeholder: string;
  @Output() public mySearch: EventEmitter<string> = new EventEmitter();

  public search(text: string): void {
    this.mySearch.emit(text);
  }
}
