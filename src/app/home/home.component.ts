import {Component} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.pug'
})
export class HomeComponent {
  foo:string;
  constructor() {
    this.foo = 'bar';
  }
}
