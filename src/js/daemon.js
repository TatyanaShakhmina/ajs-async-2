import MagicianDaemon from './magiciandaemon';

export default class Daemon extends MagicianDaemon {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
