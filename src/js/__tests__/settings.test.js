import Settings from '../settings';

test('настройки по умолчанию', () => {
  const unit = new Settings;
  const result = unit.settings;
  expect(result.get('theme')).toBe('dark');
  expect(result.get('music')).toBe('trance');
  expect(result.get('difficulty')).toBe('easy');
});

test('меняет пользовательские настройки', () => {
  const unit = new Settings;
  unit.setSetting('theme', 'gray');
  unit.setSetting('music', 'chillout');
  const result = unit.settings;
  expect(result.get('theme')).toBe('gray');
  expect(result.get('music')).toBe('chillout');
  expect(result.get('difficulty')).toBe('easy');
});
