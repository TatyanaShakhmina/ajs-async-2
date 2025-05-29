import Undead from '../undead.js';

test('создание Undead', () => {
  const unit = new Undead('Undead');

  expect(unit).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('ошибка при длине имени', () => {
  expect(() => new Undead('U')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});
