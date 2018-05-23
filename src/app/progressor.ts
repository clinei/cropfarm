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

  update(deltaTime) {
    const sum = this.curr + this.increasePerSecond * deltaTime / 1000;
    if (sum > this.target) {
      this.curr = sum - this.target;
    }
    else {
      this.curr = sum;
    }
  }
}