import { Controller } from './controller';

export class UpgradeLogic {
  private basePrice: number;
  private scaleFactor: number;

  constructor(
    basePrice: number,
    scaleFactor: number,
  ) {
    this.basePrice = basePrice;
    this.scaleFactor = scaleFactor;
  }

  upgradeTo(level): number {
    return Math.pow(this.basePrice, 1 + level * this.scaleFactor);
  }
}