import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string;
  @Input() price: number;
  @Input() onClick: Function;
  @Input() background: string = 'rgb(60, 180, 80)';
  @Input() color: string = 'rgb(255, 255, 255)';

  constructor() { }
}
