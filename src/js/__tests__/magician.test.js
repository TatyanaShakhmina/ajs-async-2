import Magician from '../magician';

test('создание Magician', () => {
  const unit = new Magician('Wizard');

  expect(unit.name).toBe('Wizard');
  expect(unit.type).toBe('Magician');
  expect(unit.health).toBe(100);
  expect(unit.level).toBe(1);
  expect(unit.attack).toBe(10);
  expect(unit.defence).toBe(40);

});

test('ошибка при длине имени', () => {
  expect(() => new Magician('W')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});
