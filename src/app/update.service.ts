import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private prevTime: number;
  private timer: any;

  constructor(
    private playerService: PlayerService,
  ) {
    this.prevTime = Date.now();

    this.start();
  }

  start() {
    this.stop();
    this.timer = setInterval(this.update.bind(this), 1000 / 60);
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }

  update() {
    const currTime = Date.now();
    const deltaTime = currTime - this.prevTime;
    this.prevTime = currTime;

    for (let data of this.playerService.data) {
      if (data.level) {
        const doneAmount = data.progressor.update(deltaTime);
        if (doneAmount) {
          this.playerService.funds.deposit(data.worth * doneAmount);
        }
      }
    }
  }
}
