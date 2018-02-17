import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {

  constructor() {}

  public sayHello() {
    console.log('hello');
  }
}
