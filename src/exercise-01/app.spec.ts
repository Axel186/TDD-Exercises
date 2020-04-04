import {expect} from 'chai';
import {Exercise01} from './app';

describe('Word Counter', function () {
  it('Should return "boom, 2|bang, 1"', () => {
    expect(Exercise01.wordCounter('boom,bang,boom')).to.equals('boom, 2|bang, 1');
  });
});
