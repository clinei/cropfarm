import { CropData } from "./crop.data";

export class Progressor {
  curr: number;
  target: number;
  increasePerSecond: number;
  scaleFactor: number;

  constructor(
    curr: number,
    target: number,
    increasePerSecond: number,
    scaleFactor: number = 0.1,
  ) {
    this.curr = curr;
    this.target = target;
    this.increasePerSecond = increasePerSecond;
    this.scaleFactor = scaleFactor;
  }

  update(deltaTime: number, level: number): number {
    let doneAmount = 0;

    const sum = this.curr + this.increasePerSecond * (1 + level * this.scaleFactor) * deltaTime / 1000;
    if (sum > this.target) {
      doneAmount = Math.floor(sum / this.target);
      this.curr = sum - this.target * doneAmount;
    }
    else {
      this.curr = sum;
    }

    return doneAmount;
  }
}