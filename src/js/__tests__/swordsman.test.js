import Swordsman from '../swordsman';

test('создание Swordsman', () => {
  const unit = new Swordsman('Girl');

  expect(unit).toEqual({
    name: 'Girl',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

test('ошибка при длине имени', () => {
  expect(() => new Swordsman('G')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});
