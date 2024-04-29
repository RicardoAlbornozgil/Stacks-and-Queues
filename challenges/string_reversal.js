/**
    String Reversal

    Write a function that reverses a string by handling one letter at a time. You cannot use an arrays, nor can you use any string-reversal built-in method.
 */


const Stack = require('../stack');

function reverseString(str) {
    // Initialize an empty stack
    const stack = new Stack();

    // Push each character of the input string onto the stack
    for (let char of str) {
        stack.push(char);
    }

    // Initialize an empty string to store the reversed string
    let reversed = '';

    // Pop each character from the stack and append it to the reversed string
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }

    // Return the reversed string
    return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("12345")); // Output: "54321"
