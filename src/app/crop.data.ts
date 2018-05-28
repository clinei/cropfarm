import { UpgradeLogic } from './upgrade.logic';
import { Progressor } from './progressor';
import { WorthLogic } from './worth.logic';
import { PlayerService } from './player.service';
import { FieldService } from './field.service';

export class CropData {
  name: string;
  level: number;
  baseWorth: number;
  imageURL: string;
  upgradeLogic: UpgradeLogic;
  worthLogic: WorthLogic;
  progressor: Progressor;
  upgradePrice: number;

  constructor(
    name: string,
    level: number,
    baseWorth: number,
    imageURL: string,
    upgradeLogic: UpgradeLogic,
    worthLogic: WorthLogic,
    progressor: Progressor,
    private playerService: PlayerService,
    private fieldService: FieldService,
  ) {
    this.name = name;
    this.level = level;
    this.baseWorth = baseWorth;
    this.imageURL = imageURL;
    this.upgradeLogic = upgradeLogic;
    this.worthLogic = worthLogic;
    this.progressor = progressor;

    this.upgradePrice = this.upgradeLogic.upgradeTo(this.level);
  }

  update(deltaTime: number) {
    if (this.level) {
      const doneAmount = this.progressor.update(deltaTime, this.level);
      if (doneAmount) {
        this.playerService.funds.deposit(this.worth * doneAmount);
      }
    }
  }

  upgrade() {
    try {
      this.playerService.funds.withdraw(this.upgradePrice);
      try {
        try {
        this.fieldService.add(this.imageURL);
        }
        catch (e) {
          console.log(e);
        }
        this.level += 1;
        this.upgradePrice = this.upgradeLogic.upgradeTo(this.level);
      }
      catch (e) {
        this.playerService.funds.deposit(this.upgradePrice);
      }
    }
    catch (e) {}
  }

  get worth() {
    return this.worthLogic.getWorth(this.baseWorth, this.level);
  }
}