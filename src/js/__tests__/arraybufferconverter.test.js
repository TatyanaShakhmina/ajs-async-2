import ArrayBufferConverter from '../arraybufferconverter';
import { getBuffer } from '../arraybufferconverter';

test('успешная конвертация буфера в строку', () => {
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  converter.load(buffer);
  const result = converter.toString();

  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
