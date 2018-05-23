import { UpgradeLogic } from './upgrade.logic';
import { Progressor } from './progressor';
import { Controller } from './controller';

export class CropData {
  name: string;
  level: number;
  baseWorth: number;
  imageURL: string;
  upgradeLogic: UpgradeLogic;
  progressor: Progressor;
  upgradePrice: number;
  controller: Controller;

  constructor(
    name: string,
    level: number,
    baseWorth: number,
    imageURL: string,
    upgradeLogic: UpgradeLogic,
    progressor: Progressor,
    controller: Controller,
  ) {
    this.name = name;
    this.level = level;
    this.baseWorth = baseWorth;
    this.imageURL = imageURL;
    this.upgradeLogic = upgradeLogic;
    this.progressor = progressor;
    this.controller = controller;

    this.upgradePrice = this.upgradeLogic.upgradeTo(this.level);
  }

  upgrade() {
    try {
      this.controller.funds.withdraw(this.upgradePrice);
      this.level += 1;
      this.upgradePrice = this.upgradeLogic.upgradeTo(this.level);
    }
    catch (e) {}
  }
}