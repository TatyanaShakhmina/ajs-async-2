import Bowerman from '../bowerman';

test('создание Bowerman', () => {
  const unit = new Bowerman('Boy');

  expect(unit).toEqual({
    name: 'Boy',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('ошибка при длине имени', () => {
  expect(() => new Bowerman('B')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});
