import Zombie from '../zombie.js';

test('создание Zombie', () => {
  const unit = new Zombie('Zombie');

  expect(unit).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

test('ошибка при длине имени', () => {
  expect(() => new Zombie('Z')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});
