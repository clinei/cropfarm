import { Component, Input, OnInit } from '@angular/core';

import { Progressor } from '../progressor';

@Component({
  selector: 'app-crop-item',
  templateUrl: './crop-item.component.html',
  styleUrls: ['./crop-item.component.css']
})
export class CropItemComponent implements OnInit {
  @Input() imageURL: string;
  @Input() progressor: Progressor;

  constructor() { }

  ngOnInit() {
  }

}
