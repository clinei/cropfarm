import { Component, Input, OnInit } from '@angular/core';

import { Progressor } from '../progressor';
import { CropData } from '../crop.data';

@Component({
  selector: 'app-crop-item',
  templateUrl: './crop-item.component.html',
  styleUrls: ['./crop-item.component.css']
})
export class CropItemComponent implements OnInit {
  @Input() data: CropData;

  constructor() { }

  ngOnInit() {
  }

}
