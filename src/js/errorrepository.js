export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  add(code, message) {
    this.errors.set(code, message);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
