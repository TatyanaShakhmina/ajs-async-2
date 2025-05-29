import MagicianDaemon from './magiciandaemon';

export default class Magician extends MagicianDaemon {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
