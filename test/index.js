import assert from 'assert';
import emojafy from '../index';

/** @test {emojafy} */
describe('emojafy', () => {
  it('is funtion', () => {
    assert(typeof emojafy === 'function');
  });

  it('should return string', () => {
    const text = 'sushiおすしsushiすし';
    assert(emojafy(text) === 'sushi🍣sushi🍣');
  });
});
