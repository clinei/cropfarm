import { Component, OnInit } from '@angular/core';

import { Controller } from './controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  controller: Controller;

  ngOnInit() {
    this.controller = new Controller(Date.now());
  }
}
