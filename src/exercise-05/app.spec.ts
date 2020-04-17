import {FizzBuzzNumber, FizzBuzzWhizNumber} from './app';
import {expect} from 'chai';

describe('Exercise 05 - FizzBuzzWhiz', () => {

  // Is input valid.
  it('Should not receive float numbers.', () => {
    expect(() => new FizzBuzzNumber(0.5)).to.throw('The parameter must be integer number.');
  });

  // Is input valid.
  it('Should be bigger than 1.', () => {
    expect(() => new FizzBuzzNumber(1)).to.throw('The number must be bigger than 1.');
  });

  it('Prints regular number.', () => {
    const num = new FizzBuzzNumber(4);
    expect(num.render()).to.equals('4');
  });

  it('Prints "Fizz" on numbers that divisible by 3.', () => {
    const num = new FizzBuzzNumber(3);
    expect(num.render()).to.equals('Fizz');
  });

  it('Prints "Buzz" on numbers that divisible by 5.', () => {
    const num = new FizzBuzzNumber(5);
    expect(num.render()).to.equals('Buzz');
  });

  it('Prints "FizzBuzz" on numbers that divisible by 3 and 5.', () => {
    const num = new FizzBuzzNumber(15);
    expect(num.render()).to.equals('FizzBuzz');
  });

  it('Prints "Whiz" on Prime numbers.', () => {
    const num = new FizzBuzzWhizNumber(2);
    expect(num.render()).to.equals('Whiz');
  });

  it('Prints regular number.', () => {
    const num = new FizzBuzzWhizNumber(8);
    expect(num.render()).to.equals('8');
  });

  it('Prints "FizzWhiz" on Prime numbers that divisible by 3.', () => {
    const num = new FizzBuzzWhizNumber(3);
    expect(num.render()).to.equals('FizzWhiz');
  });

  it('Prints "BuzzWhiz" on Prime numbers that divisible by 5.', () => {
    const num = new FizzBuzzWhizNumber(5);
    expect(num.render()).to.equals('BuzzWhiz');
  });
});
