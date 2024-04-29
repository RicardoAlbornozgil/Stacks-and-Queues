/**
    Balanced Brackets?

    Write a function that is passed a string which can contain any text, including different kinds of brackets: `{} [] ()`.

    It should examine the string and decide if the string is “balanced” — a balanced string is one where the different kinds of brackets are properly balanced, such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets.

    Examples of balanced strings:

    - `hello` *(no brackets)*
    - `(hi) [there]`
    - `(hi [there])`
    - `(((hi)))`

    Imbalanced:

    - `(hello` *(bracket left open at end)*
    - `(nope]` *(wrong type closed)*
    - `((ok) [nope)]` *(closed out of order)*
 */

const Stack = require('../stack')

function isBalanced(str) {
    const stack = new Stack();
    const openingBrackets = '({[';
    const closingBrackets = ')}]';
    const bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const topBracket = stack.pop();
            if (topBracket !== bracketPairs[char]) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}


// Test cases
console.log(isBalanced("hello")); // true
console.log(isBalanced("(hi) [there]")); // true
console.log(isBalanced("(hi [there])")); // true
console.log(isBalanced("(((hi)))")); // true
console.log(isBalanced("(hello")); // false
console.log(isBalanced("(nope]")); // false
console.log(isBalanced("((ok) [nope)]")); // false