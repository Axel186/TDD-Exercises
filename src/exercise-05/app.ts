/**
 * Interfaces
 */

interface IFizzBuzzNumber {
  render(): string;
}

interface ISubstitute {
  shouldReplace: any;
  replaceWith: string;
}

/**
 * Initial Substitutes constants.
 */

const SUBSTITUTES: ISubstitute[] = [{
  shouldReplace: (num: number) => num % 3 === 0,
  replaceWith: 'Fizz'
}, {
  shouldReplace: (num: number) => num % 5 === 0,
  replaceWith: 'Buzz'
}];

/**
 * Application class.
 */
export class FizzBuzzNumber implements IFizzBuzzNumber {
  readonly substitutes: ISubstitute[] = SUBSTITUTES;
  private _num;

  constructor(num: number) {
    this.setNumber(num);
  }

  /**
   * Public API
   */
  setNumber(value: number) {
    // Validation
    if (value % 1 !== 0) {
      throw new Error('The parameter must be integer number.');
    }

    if (value <= 1) {
      throw new Error('The number must be bigger than 1.');
    }

    // Validation passed, assign value.
    this._num = value;
  }

  render(): string {
    const strArr: string[] = [];

    // Cover all substitutes checks and prepare output.
    this.substitutes.forEach((substitute: ISubstitute) => {
      if (substitute.shouldReplace(this._num)) {
        strArr.push(substitute.replaceWith);
      }
    });

    // Output string with replaced words or the number itself.
    return strArr.join('') || this._num.toString();
  }
}

/**
 * Additional logic.
 * Adding "Whiz" as another substitute. Only for Prime numbers.
 */
export class FizzBuzzWhizNumber extends FizzBuzzNumber {
  readonly substitutes: ISubstitute[] = SUBSTITUTES.concat({
    shouldReplace: (num: number) => FizzBuzzWhizNumber.isPrime(num),
    replaceWith: 'Whiz'
  });

  constructor(props) {
    super(props);
  }

  /**
   * Utils functions
   */

  private static isPrime(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num > 1;
  }
}

