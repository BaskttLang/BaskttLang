---
title: Functions in basktt
---

In Basktt, functions are essential building blocks that allow developers to encapsulate code, perform operations, and organize logic. They provide a way to define reusable pieces of code that can be invoked with different inputs. Here’s an overview of functions in Basktt:

## Function Declaration:
- Functions in Basktt are declared using the `fun` keyword, followed by the function name and its parameters.

- Example:
```basktt
fun greet(name: String) => {
    return("Hello, " + name + "!");
}
```

## Function Parameters:
- Functions can accept parameters, which can be of various types, including primitive and complex types.
- Parameters allow functions to operate on different values each time they are called.
- Example:
```basktt
fun add(a: Number, b: Number) => {
    return(a + b);
}
```

## Return Values:
- Functions can return values using the return statement. The return type is inferred based on the value returned, or it can be explicitly defined.
- Example:
```basktt
fun multiply(x: Number, y: Number): Number => {
    return(x * y);
}
```
## Function Calls:

- Functions are invoked by calling their name followed by parentheses, which contain any required arguments.
- Example:

```basktt
kickIt result = add(5, 3); // result is now 8
ball.text(greet("Miguel")); // Outputs: Hello, Miguel!
```
## Anonymous Functions:
- Basktt supports anonymous functions, which are functions without a name. They can be assigned to variables or passed as arguments.

- Example:
```basktt
kickIt square = (num: Number) => {
    return(num * num);
};
ball.text(square(4)); // Outputs: 16
```

## Example usage of functions
```basktt
@use console;

// Function to calculate the factorial of a number
fun factorial(n: Number): Number => {
    ball.if (n === 0) return(1);
    return(n * factorial(n - 1));
}

// Main function
fun Main => {
    kickIt number: Number = 5;
    kickIt fact: Number = factorial(number);
    ball.text("Factorial of " + number + " is " + fact);
}
```
**✨📜Its only that at the moment, thay tuned for more!📜✨**