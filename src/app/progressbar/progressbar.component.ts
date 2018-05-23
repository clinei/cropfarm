import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Progressor } from '../progressor';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit, OnChanges {
  @Input() curr: number;
  @Input() target: number;
  right: number;
  shouldStop: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.right = Math.round((1.0 - this.curr / this.target) * 100);
  }
}
