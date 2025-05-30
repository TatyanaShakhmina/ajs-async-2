import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      const jsonString = await json(buffer);
      if (!jsonString) {
        throw new Error('Получена пустая строка вместо JSON');
      }
      return JSON.parse(jsonString);
    } catch (error) {
      throw new Error(`Ошибка при загрузке данных: ${error.message}`);
    }
  }
}
