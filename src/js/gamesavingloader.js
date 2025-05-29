import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then(buffer => json(buffer))
      .then(jsonString => {
        if (!jsonString) {
          throw new Error('Получена пустая строка вместо JSON');
        }
        return JSON.parse(jsonString);
      })
      .catch((error) => {
        throw new Error(`Ошибка при загрузке данных: ${error.message}`);
      });
  }
}
