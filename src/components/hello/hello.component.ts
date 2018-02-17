import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styleUrls: [ '../../styles.scss' ],
})
export class HelloComponent {

  constructor() {
  }

  public sayHello() {
    alert('Hello!');
  }
}
