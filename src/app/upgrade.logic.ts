import { Controller } from './controller';

export class UpgradeLogic {
  private basePrice: number;
  private scaleFactor: number;
  private timesUpgraded: number;
  private upgradePrice: number;

  constructor(
    private controller: Controller,
    basePrice: number,
    scaleFactor: number,
  ) {
    this.basePrice = basePrice;
    this.upgradePrice = basePrice;
    this.scaleFactor = scaleFactor;
    this.timesUpgraded = 0;
  }

  upgrade() {
    try {
      this.controller.funds.withdraw(this.upgradePrice);
      this.timesUpgraded += 1;
      this.upgradePrice = Math.pow(this.basePrice, 1 + this.timesUpgraded * this.scaleFactor);
    }
    catch (e) {}
  }

  get price() {
    return this.upgradePrice;
  }
}