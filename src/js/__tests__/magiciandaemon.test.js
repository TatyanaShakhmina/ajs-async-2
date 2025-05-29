import Daemon from '../daemon';
import Magician from '../magician';

test('атака с 3 клетки', () => {
  const unit = new Daemon('Aura');
  unit.distance = 3;
  unit.stoned = false;
  expect(unit.attack).toBe(8);
});

test('атака со 2 клетки и с дурманом', () => {
  const unit = new Magician('Wizard');
  unit.distance = 2;
  unit.stoned = true;
  expect(unit.attack).toBe(4);
});

test('get/set stoned', () => {
  const unit = new Daemon('Aura');
  unit.stoned = true;
  expect(unit.stoned).toBe(true);
});
