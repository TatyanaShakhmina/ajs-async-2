import Team from '../team.js';
import Daemon from '../daemon';
import Magician from '../magician';

test('добавление выбранного персонажа в команду', () => {
  const team = new Team();
  const unit = new Daemon('Aura');
  team.add(unit);
  expect(team.members.has(unit)).toBe(true);
});

test('ошибка при повторном добавлении в команду', () => {
  const team = new Team();
  const unit = new Daemon('Aura');
  team.add(unit);
  expect(() => team.add(unit)).toThrow('Этот персонаж уже добавлен в команду');
});

test('добавить несколько персонажей', () => {
  const team = new Team();
  const unit1 = new Daemon('Aura');
  const unit2 = new Magician('Wizard');
  team.addAll(unit1, unit2, unit1);
  expect(team.members.size).toBe(2);
});

test('конвертация в массив', () => {
  const team = new Team();
  const unit1 = new Daemon('Aura');
  const unit2 = new Magician('Wizard');
  team.addAll(unit1, unit2);
  const arr = team.toArray();
  expect(Array.isArray(arr)).toBe(true);
  expect(arr).toContain(unit1);
  expect(arr).toContain(unit2);
});
