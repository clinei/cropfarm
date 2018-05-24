export class WorthLogic {
  scaleFactor: number;

  constructor(
    scaleFactor: number = 0.07,
  ) {
    this.scaleFactor = scaleFactor;
  }

  getWorth(baseWorth, level) {
    // return Math.round(Math.pow(baseWorth, 1 + level * this.scaleFactor / 2) * 100) / 100;
    return baseWorth;
  }
}