import Character from '../character';
import Bowerman from '../bowerman';
import Zombie from '../zombie.js';

test('ошибка при неверном типе', () => {
  expect(() => new Character('Big', 'Big')).toThrow('Неверный тип');
});

test('работа метода levelUp', () => {
  const unit = new Bowerman ('Big', 'Bowman');
  unit.levelUp();

  expect(unit.level).toBe(2);
  expect(unit.attack).toBe(30);
  expect(unit.defence).toBe(30);
  expect(unit.health).toBe(100);
});

test('ошибка при показателе жизни 0', () => {
  const unit = new Bowerman ('Big', 'Bowman');
  unit.health = 0;

  expect(() => unit.levelUp()).toThrow('Нельзя повысить левел умершего');
});


test('работа метода damage', () => {
  const unit = new Zombie('Wolf', 'Zombie');
  unit.damage(20);

  expect(unit.health).toBe(82);
});

test('работа при показателе жизни ниже 0', () => {
  const unit = new Zombie('Wolf', 'Zombie');
  unit.health = 10;
  unit.damage(100);

  expect(unit.health).toBe(0);
});
