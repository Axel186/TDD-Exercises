import {expect} from 'chai';
import {Exercise03} from './app';

describe('String Calculator', function () {
  // A method that, given an integer, returns true if it is a prime and false if it is not.

  it('Prime Number must be larger than 1', () => {
    expect(Exercise03.primeNumber(0)).to.be.false;
    expect(Exercise03.primeNumber(1)).to.be.false;
  });

  it('Prime Number test', () => {
    expect(Exercise03.primeNumber(2)).to.be.true;
    expect(Exercise03.primeNumber(3)).to.be.true;
    expect(Exercise03.primeNumber(4)).to.be.false;
    expect(Exercise03.primeNumber(5)).to.be.true;
    expect(Exercise03.primeNumber(6)).to.be.false;
    expect(Exercise03.primeNumber(11)).to.be.true;
    expect(Exercise03.primeNumber(13)).to.be.true;
    expect(Exercise03.primeNumber(29)).to.be.true;
    expect(Exercise03.primeNumber(36)).to.be.false;
    expect(Exercise03.primeNumber(43)).to.be.true;
  });
});

