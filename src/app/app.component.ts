import { Component } from '@angular/core';
import { CarService } from './car.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  html = '<p>Some html from app</p>';
  input = 'hello';

  arr = ['a', 'b', 'c', 'd'];

  obj = { title: 'lol' };

  constructor(private car: CarService) {
    this.car.inspect();
  }

  click() {
    console.log('clicked');
  }

  handleInputChange($event) {
    this.input = $event.target.value;
  }

  handleCallback($event) {
    alert($event);
  }

  handleChange($event) {
    // this.obj = { title: $event.target.value };
    this.obj.title = $event.target.value;
  }
}
