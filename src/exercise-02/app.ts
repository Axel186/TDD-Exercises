export class Exercise02 {
  static calculatorAdd(str: string): number {
    const DELIMITER = ',';
    const MIN_NUMBER = 0;
    const MAX_NUMBER = 1000;

    let delimiters: string[] = ['\\n'];

    // String validation.
    if (!str) {
      return 0;
    }

    // Check if there are custom delimiters were passed.
    const firstLine: string = str.split('\\n')[0];
    if (firstLine && !Number.parseInt(firstLine, 10)) {
      // Detect all custom delimiters.
      const customDelimiters = firstLine.split(']')
        .map((d: string) => d.length > 1 ? d.substr(1) : d)
        .filter((d: string) => !!d);

      // Add custom delimiters to collection.
      delimiters = delimiters.concat([...customDelimiters]);
    }

    // Replace all custom delimiters with general one.
    delimiters.forEach((customDelimiter: string) => {
      str = str.split(customDelimiter).join(DELIMITER);
    });

    // Prepare array of valid numbers to calculate.
    const numbers = str.split(DELIMITER)
      .filter((n: string) => !!n)
      .map((n: string) => Number.parseInt(n, 10))
      .filter((n: number) => n <= MAX_NUMBER);

    // Throw error if there are invalid numbers in array.
    if (numbers.find((n: number) => n < MIN_NUMBER)) {
      throw new Error('Negative number');
    }

    // Run the calculation
    return numbers.reduce((n: number, sum) => n + sum, 0);
  }
}
