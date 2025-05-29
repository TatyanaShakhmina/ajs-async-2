import Character from './character';

export default class MagicianDaemon extends Character {
  constructor(name, type) {
    super(name, type);
    this._stoned = false;
    this._baseAttack = 100;
    this.distance = 1;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._baseAttack = value;
  }

  get attack() {
    let result = this._baseAttack * (1 - (this.distance - 1) * 0.1);
    if (this._stoned) {
      result -= Math.log2(this.distance) * 5;
    }
    return result;
  }
}
