import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    public playerService: PlayerService,
    private updateService: UpdateService,
  ) {}

  ngOnInit() {
  }
}
