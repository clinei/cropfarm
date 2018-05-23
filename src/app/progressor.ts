export class Progressor {
  curr: number;
  target: number;
  increasePerSecond: number;

  constructor(
    curr: number,
    target: number,
    increasePerSecond: number,
  ) {
    this.curr = curr;
    this.target = target;
    this.increasePerSecond = increasePerSecond;
  }

  update(deltaTime): number {
    let doneAmount = 0;

    const sum = this.curr + this.increasePerSecond * deltaTime / 1000;
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