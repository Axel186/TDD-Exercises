export class Exercise03 {
  static primeNumber(n: number): boolean {
    // A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural
    // numbers. A natural number greater than 1 that is not prime is called a composite number. For example, 5 is prime
    // because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve 5 itself.

    // Number validation.
    if (n <= 1) {
      return false;
    }

    // Prime number check.
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    // All tests passed, this is prime number.
    return true;
  }
}
