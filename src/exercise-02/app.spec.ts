import {expect} from 'chai';
import {Exercise02} from './app';

describe('String Calculator', function () {
  it('An empty string returns zero', () => {
    expect(Exercise02.calculatorAdd('')).to.equals(0);
  });

  it('A single number returns the value', () => {
    expect(Exercise02.calculatorAdd('1')).to.equals(1);
  });

  it('Two numbers, comma delimited, returns the sum', () => {
    expect(Exercise02.calculatorAdd('1,2')).to.equals(3);
  });

  it('Two numbers, newline delimited, returns the sum', () => {
    expect(Exercise02.calculatorAdd('1\\n2')).to.equals(3);
  });

  it('Three numbers, delimited either way, returns the sum', () => {
    expect(Exercise02.calculatorAdd('5\\n7,119')).to.equals(131);
  });

  it('Negative numbers throw an exception', () => {
    expect(() => Exercise02.calculatorAdd('5,-1')).to.throw('Negative number');
  });

  it('Numbers greater than 1000 are ignored', () => {
    expect(Exercise02.calculatorAdd('1,2, 1001')).to.eq(3);
  });

  it('A single char delimiter can be defined on the first line (e.g. //# for a ‘#’ as the delimiter)', () => {
    expect(Exercise02.calculatorAdd('#\\n1,2#1001#3')).to.eq(6);
  });

  it('A multi char delimiter can be defined on the first line (e.g. //[###] for ‘###’ as the delimiter)', () => {
    expect(Exercise02.calculatorAdd('[###]\\n1,2###3,4')).to.equals(10);
  });

  it('Many single or multi-char delimiters can be defined (each wrapped in square brackets)', () => {
    expect(Exercise02.calculatorAdd('[###][T][#]|\\n1|2###3#4T5')).to.equals(15);
  });
});

