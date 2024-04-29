/**
    Calculator
    In this exercise, you’ll build a “polish notation calculator”.
    Polish notation is a different way to write an artithmetic expression. For example, instead of writing 1 + 2 * 3, as we would in normal (“infix”) style, we could write it with the operators to the left of their arguments. This expression would become + 1 * 2 3. You can read a polish notation expression backwards to see exactly what it does — in this case, multiply 2 times 3, and add that result to 1.
    Let’s try this out:
    calc("+ 1 2")  # 1 + 2 == 3

    calc("* 2 + 1 2")  # 2 * (1 + 2) == 6

    calc("+ 9 * 2 3")   # 9 + (2 * 3) == 15
    ​
    Let’s make sure we have non-commutative operators (subtraction and division) working:
    calc("- 1 2")  # 1 - 2 == -1

    calc("- 9 * 2 3")  # 9 - (2 * 3) == 3

    calc("/ 6 - 4 2")  # 6 / (4 - 2) == 3
 */


function calc(expression) {
    const tokens = expression.split(' ');

    const stack = [];

    for (let i = tokens.length - 1; i >= 0; i--) {
        const token = tokens[i];
        if (!isNaN(token)) {
            // Operand: push onto stack
            stack.push(parseInt(token));
        } else {
            // Operator: pop operands, perform operation, and push result back onto stack
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
                default:
                    throw new Error('Invalid operator');
            }
        }
    }

    return stack.pop();
}

// Test cases
console.log(calc("+ 1 2"));        // Output: 3
console.log(calc("* 2 + 1 2"));    // Output: 6
console.log(calc("+ 9 * 2 3"));    // Output: 15
console.log(calc("- 1 2"));        // Output: -1
console.log(calc("- 9 * 2 3"));    // Output: 3
console.log(calc("/ 6 - 4 2"));    // Output: 3
