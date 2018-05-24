import { Injectable } from '@angular/core';

import { Stock } from './stock';
import { CropData } from './crop.data';
import { UpgradeLogic } from './upgrade.logic';
import { Progressor } from './progressor';
import { WorthLogic } from './worth.logic';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  funds: Stock = new Stock();
  data: CropData[] = [
    new CropData('Potato', 1,  4,   'assets/potato.png', new UpgradeLogic(2),   new WorthLogic(), new Progressor(0,  2, 1), this),
    new CropData('Corn',   0,  16,  'assets/corn.png',   new UpgradeLogic(4),   new WorthLogic(), new Progressor(0,  4, 1), this),
    new CropData('Wheat',  0,  64,  'assets/wheat.png',  new UpgradeLogic(16),  new WorthLogic(), new Progressor(0,  6, 1), this),
    new CropData('Tomato', 0, 128,  'assets/tomato.png', new UpgradeLogic(32),  new WorthLogic(), new Progressor(0,  8, 1), this),
    new CropData('Tulip',  0, 256,  'assets/tulip.png',  new UpgradeLogic(64),  new WorthLogic(), new Progressor(0, 10, 1), this),
  ];
}