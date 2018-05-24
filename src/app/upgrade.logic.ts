export class UpgradeLogic {
  private basePrice: number;
  private scaleFactor: number;

  constructor(
    basePrice: number,
    scaleFactor: number = 0.1,
  ) {
    this.basePrice = basePrice;
    this.scaleFactor = scaleFactor;
  }

  upgradeTo(level): number {
    return Math.round(Math.pow(this.basePrice, 1 + level * this.scaleFactor) * 100) / 100;
  }
}