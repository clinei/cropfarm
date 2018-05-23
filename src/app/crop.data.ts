import { UpgradeLogic } from './upgrade.logic';
import { Progressor } from './progressor';

export class CropData {
  name: string;
  baseWorth: number;
  imageURL: string;
  upgradeLogic: UpgradeLogic;
  progressor: Progressor;

  constructor(
    name: string,
    baseWorth: number,
    imageURL: string,
    upgradeLogic: UpgradeLogic,
    progressor: Progressor,
  ) {
    this.name = name;
    this.baseWorth = baseWorth;
    this.imageURL = imageURL;
    this.upgradeLogic = upgradeLogic;
    this.progressor = progressor;
  }
}