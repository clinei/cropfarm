import { Component, OnInit } from '@angular/core';
import { FieldService } from '../field.service';

@Component({
  selector: 'app-cropfield',
  templateUrl: './cropfield.component.html',
  styleUrls: ['./cropfield.component.css']
})
export class CropfieldComponent implements OnInit {
  size: number = 600;
  sizeStr: string;
  cropSize: number;
  cropSizeStr: string;
  nextPosStr: string;

  constructor(
    private fieldService: FieldService,
  ) {
    this.sizeStr = `${this.size}px`;
    this.cropSize = 600 / fieldService.size;
    this.cropSizeStr = `${this.cropSize}px`;

    this.fieldService.next.subscribe((next => {
      this.nextPosStr = `${next * this.cropSize }px`;
    }).bind(this));
  }

  ngOnInit() {
  }

}
