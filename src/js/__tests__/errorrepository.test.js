import ErrorRepository from '../errorrepository';

test('получение текста ошибки', () => {
  const unit = new ErrorRepository;
  unit.add(404, 'Not Found');
  expect(unit.translate(404)).toBe('Not Found');
});

test('получение "Unknown error" для неизвестного кода', () => {
  const unit = new ErrorRepository();
  expect(unit.translate(123)).toBe('Unknown error');
});
