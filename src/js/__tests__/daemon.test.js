import Daemon from '../daemon';

test('создание Daemon', () => {
  const unit = new Daemon('Aura');

  expect(unit.name).toBe('Aura');
  expect(unit.type).toBe('Daemon');
  expect(unit.health).toBe(100);
  expect(unit.level).toBe(1);
  expect(unit.attack).toBe(10);
  expect(unit.defence).toBe(40);
});

test('ошибка при длине имени', () => {
  expect(() => new Daemon('A')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});
