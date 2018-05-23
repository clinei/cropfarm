export class Stock {
  private _amount: number;

  constructor(
    startingAmount: number = 0
  ) {
    this._amount = startingAmount;
  }

  deposit(amount: number) {
    // potential overflow
    this._amount += amount;
  }

  withdraw(amount: number) {
    if (this._amount >= amount) {
      this._amount -= amount;
    }
    else throw new Error('Not enough stock')
  }

  get amount() {
    return this._amount;
  }
}