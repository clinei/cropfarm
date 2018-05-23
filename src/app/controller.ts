import { Injectable } from '@angular/core';

import { Stock } from './stock';
import { CropData } from './crop.data';
import { UpgradeLogic } from './upgrade.logic';
import { Progressor } from './progressor';

export class Controller {
  funds: Stock = new Stock();
  data: CropData[] = [
    new CropData('Potato', 1,  2,  'assets/potato.png', new UpgradeLogic(2, 1), new Progressor(0,  2, 1), this),
    new CropData('Corn',   0,  4,  'assets/corn.png',   new UpgradeLogic(2, 1), new Progressor(0,  4, 1), this),
    new CropData('Wheat',  0,  8,  'assets/wheat.png',  new UpgradeLogic(2, 1), new Progressor(0,  8, 1), this),
    new CropData('Tomato', 0, 16,  'assets/tomato.png', new UpgradeLogic(2, 1), new Progressor(0, 16, 1), this),
    new CropData('Tulip',  0, 32,  'assets/tulip.png',  new UpgradeLogic(2, 1), new Progressor(0, 32, 1), this),
  ];

  private prevTime: number;
  private timer: any;

  constructor(
    startTime: number,
  ) {
    this.prevTime = startTime;

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

    for (let data of this.data) {
      if (data.level) {
        const doneAmount = data.progressor.update(deltaTime);
        if (doneAmount) {
          this.funds.deposit(data.baseWorth * doneAmount);
        }
      }
    }
  }
}