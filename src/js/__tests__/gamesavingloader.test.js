import read from '../reader.js';
import json from '../parser.js';
import GameSavingLoader from '../gamesavingloader';

jest.mock('../reader.js', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../parser.js', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('GameSavingLoader', () => {
  const unitBuffer = new ArrayBuffer(10);
  const unitJSONString = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const expectedObject = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('успешно загружает и парсит данные', async () => {
    read.mockResolvedValue(unitBuffer);
    json.mockResolvedValue(unitJSONString);

    const result = await GameSavingLoader.load();
    expect(result).toEqual(expectedObject);

    expect(read).toHaveBeenCalledTimes(1);
    expect(json).toHaveBeenCalledWith(unitBuffer);
  });

  test('должен выбрасывать ошибку при сбое в read()', async () => {
    read.mockRejectedValue(new Error('Ошибка чтения'));

    await expect(GameSavingLoader.load()).rejects.toThrow('Ошибка при загрузке данных: Ошибка чтения');
  });

  test('должен выбрасывать ошибку при сбое в json()', async () => {
    read.mockResolvedValue(unitBuffer);
    json.mockRejectedValue(new Error('Ошибка парсинга'));

    await expect(GameSavingLoader.load()).rejects.toThrow('Ошибка при загрузке данных: Ошибка парсинга');
  });
});
