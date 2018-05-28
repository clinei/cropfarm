import { Injectable } from '@angular/core';

import { Stock } from './stock';
import { CropData } from './crop.data';
import { UpgradeLogic } from './upgrade.logic';
import { Progressor } from './progressor';
import { WorthLogic } from './worth.logic';
import { FieldService } from './field.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  funds: Stock = new Stock();
  data: CropData[];

  constructor(
    private fieldService: FieldService,
  ) {
    this.funds.deposit(2);

    this.data = [
      new CropData('Potato', 0,  4,
                   'assets/potato.png',
                   new UpgradeLogic(2),
                   new WorthLogic(),
                   new Progressor(0, 2, 1, 0.1), this, this.fieldService),
      new CropData('Corn',   0,  32,
                   'assets/corn.png',
                   new UpgradeLogic(16),
                   new WorthLogic(),
                   new Progressor(0, 8, 1, 0.3), this, this.fieldService),
      new CropData('Wheat',  0,  128,
                   'assets/wheat.png',
                   new UpgradeLogic(64),
                   new WorthLogic(),
                   new Progressor(0, 8, 1, 0.4), this, this.fieldService),
      new CropData('Tomato', 0, 512,
                   'assets/tomato.png',
                   new UpgradeLogic(256),
                   new WorthLogic(),
                   new Progressor(0, 16, 1, 0.5), this, this.fieldService),
      new CropData('Tulip',  0, 2048,
                   'assets/tulip.png',
                   new UpgradeLogic(1024),
                   new WorthLogic(),
                   new Progressor(0, 32, 1, 0.6), this, this.fieldService),
    ];
  }
}