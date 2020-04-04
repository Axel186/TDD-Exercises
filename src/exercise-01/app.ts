export class Exercise01 {
  static wordCounter(str: string, delimiter = ','): string {
    const outputDelimiter = '|';

    const dictionary: { [word: string]: number } = {};

    str
      .split(delimiter)
      .forEach((word: string) => dictionary[word] = (dictionary[word] || 0) + 1);

    return Object.keys(dictionary)
      .map((key: string): string => `${key}, ${dictionary[key]}`)
      .join(outputDelimiter);
  }
}
