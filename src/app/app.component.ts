import { Component, OnInit } from '@angular/core';

import { Controller } from './controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  test: number[];
  controller: Controller;

  ngOnInit() {
    this.test =  [ 1, 2, 3, 4, 5, ];
    this.controller = new Controller(Date.now());
  }
}
