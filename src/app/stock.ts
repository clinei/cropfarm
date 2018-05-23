export class Stock {
  private amount: number;

  constructor(
    startingAmount: number
  ) {
    this.amount = startingAmount;
  }

  deposit(amount: number) {
    // potential overflow
    this.amount += amount;
  }

  withdraw(amount: number) {
    if (this.amount >= amount) {
      this.amount -= amount;
    }
    else throw new Error('Not enough stock')
  }
}