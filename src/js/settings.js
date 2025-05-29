export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy']
    ]);

    this.userSettings = new Map();
  }

  setSetting(key, value) {
    this.userSettings.set(key, value);
  }

  get settings() {
    const combined = new Map(this.defaultSettings);
    for (const [key, value] of this.userSettings.entries()) {
      combined.set(key, value);
    }
    return combined;
  }
}
