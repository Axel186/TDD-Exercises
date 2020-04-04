String Calculator
---

Source: [Roy Osherove](http://osherove.com/tdd-kata-1/)

The essence is a method that, given a delimited string, returns the sum of the values. 

1. Create a simple String calculator with a method `int Add(string numbers)`
	- The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return `0`) for example `“”` or `“1”` or `“1,2”`
	- Start with the simplest test case of an empty string and move to 1 and two numbers
	- Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
	- Remember to refactor after each passing test
1. Allow the Add method to handle an unknown amount of numbers
1. Allow the Add method to handle new lines between numbers (instead of commas).
	- the following input is ok:  “1\n2,3”  (will equal 6)
	- the following input is NOT ok:  “1,\n” (not need to prove it - just clarifying)
1. Support different delimiters
	- to change a delimiter, the beginning of the string will contain a separate line that looks like this:
   `“//[delimiter]\n[numbers…]”` 
	- for example `“//;\n1;2”` should return three where the default delimiter is `‘;’` .
	- the first line is optional. All existing scenarios should still be supported.
1. Calling Add with a negative number will throw an exception `“negatives not allowed”` - and the negative that was passed.if there are multiple negatives, show all of them in the exception message
1. Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2
1. Delimiters can be of any length with the following format:  `“//[delimiter]\n” `for example: `“//[***]\n1***2***3”` should return `6`
1. Allow multiple delimiters like this:  “//[delim1][delim2]\n” for example “//[*][%]\n1*2%3” should return 6.
1. Make sure you can also handle multiple delimiters with length longer than one char

## Suggested Tests
Here is a suggested list of tests (from [Peter Provost](http://www.peterprovost.org/blog/2012/05/02/kata-the-only-way-to-learn-tdd)):

Like the Bowling Kata, this kata, made popular by [Roy Osherove](http://osherove.com/tdd-kata-1/), comes with a precise set of steps to follow. The essence is a method that given a delimited string, returns the sum of the values. I’ve always preferred my kata to define the tests I will follow every time through the exercise, so here are the tests I use for this one:

1. An empty string returns zero
1. A single number returns the value
1. Two numbers, comma delimited, returns the sum
1. Two numbers, newline delimited, returns the sum
1. Three numbers, delimited either way, returns the sum
1. Negative numbers throw an exception
1. Numbers greater than 1000 are ignored
1. A single char delimiter can be defined on the first line (e.g. //# for a ‘#’ as the delimiter)
1. A multi char delimiter can be defined on the first line (e.g. //[###] for ‘###’ as the delimiter)
1. Many single or multi-char delimiters can be defined (each wrapped in square brackets)

I rarely bother with Test #10 when I do it, because it feels like a big step to take all at once, but Roy does include it in his definition, and I have it in my kata notebook.
