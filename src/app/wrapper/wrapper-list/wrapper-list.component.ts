import { Component, OnInit } from '@angular/core';
import { products$ } from '../../data';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'wrapper-list',
  templateUrl: 'wrapper-list.component.html',
  styleUrls: ['wrapper-list.component.scss']
})

export class WrapperListComponent implements OnInit {
  public title: string = 'Profile';
  public text: string;
  public placeholder: string = 'Search term';

  // public products$: Product[];
  public products$: Observable<Product[]> = products$;

  public ngOnInit(): void {
    // products$.subscribe((products: Product[]) => {
    //   this.products$ = products;
    // });
  }

}
