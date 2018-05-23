import { Injectable } from '@angular/core';

import { Stock } from './stock';
import { CropData } from './crop.data';
import { UpgradeLogic } from './upgrade.logic';
import { Progressor } from './progressor';

export class Controller {
  funds: Stock;
  data: CropData[] = [
    new CropData('Potato', 'potatoImage', new UpgradeLogic(this, 2, 1), new Progressor(0, 2, 1)),
    new CropData('Corn', 'cornImage', new UpgradeLogic(this, 2, 1), new Progressor(0, 4, 1)),
    new CropData('Wheat', 'WheatImage', new UpgradeLogic(this, 2, 1), new Progressor(0, 8, 1)),
    new CropData('Tomato', 'tomatoImage', new UpgradeLogic(this, 2, 1), new Progressor(0, 16, 1)),
    new CropData('Tulip', 'tulipImage', new UpgradeLogic(this, 2, 1), new Progressor(0, 32, 1)),
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
      data.progressor.update(deltaTime);
    }
  }
}