import orderByProps from '../orderbyprops.js';

test('сортировка', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ['name', 'level'];
  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
  ]);
});

test('пустой объект', () => {
  const result = orderByProps({}, ['name']);
  expect(result).toEqual([]);
});
