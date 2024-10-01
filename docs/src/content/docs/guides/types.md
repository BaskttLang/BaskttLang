---
title: Introduction to Types
description: Understanding and creating types
---

In Basktt, types play a crucial role in defining how data is handled and manipulated within the language. Here's an overview of the types in Basktt:

## Types in Basktt
### Primitive Types
- **String**: Represents a sequence of characters. Example: `Hello, Basktt!`
- **Number**: Represents numeric values, including integers and floats. Example:`32` `1002`, etc
- **Boolean**: Represents truth values, either `true` or `false`.
### Complex Types
- **Array**: A collection of values that can be of any type, allowing for flexible data storage. Example: `["Miguel", "Johnny", "Alice"]`
- **Object**:  A structured data type that allows for key-value pairs. Example:
```typescript
// typescript example:
users = {
    name: "Miguel",
    age: "22"
}
```
### User defined types
- Basktt allows users to create custom types or structures, enhancing the expressiveness of the language. This can be useful for defining more complex data models, such as:
```basktt
type Person {
    name: String,
    age: Number
}
```
### Type Inference:
- Basktt supports type inference, where the type of a variable can be automatically determined based on its assigned value. This simplifies variable declarations and enhances code readability.

- Example: 
```basktt
let age = 25; // age is inferred to be a Number
```
### Type Safety:
- The language enforces type safety, ensuring that operations performed on variables are compatible with their declared types. This helps to catch errors during compile time and reduces runtime issues.

- Example:
```basktt
let name: String = "Miguel";
let age: Number = 25;

// The following line would produce an error due to type mismatch
// name = age; // Error: Type 'Number' is not assignable to type 'String'.
```
### Type Checking:
- Basktt performs type checking to ensure that variables and function arguments are of the expected types. This includes both static type checking at compile time and dynamic type checking at runtime.
### Conditional Types
- Basktt can utilize conditional types to execute different branches of code based on type evaluations. This allows for more flexible and adaptable programming patterns.
## Example Usage of Types in Basktt
Here’s a simple example illustrating the use of different types in Basktt:
```basktt
@use console;

fun Main => {
    let name: String = "Miguel";
    let age: Number = 30;
    let isActive: Boolean = true;
    let scores: Array<Number> = [95, 85, 92];

    if (isActive) {
        ball.text("Active user: " + name);
    }

    ball.text("Age: " + age);
    ball.text("Scores: " + scores);
}
```

### Conclusion
Types in Basktt enhance the language's expressiveness, safety, and robustness, making it easier for developers to write reliable and maintainable code. By combining primitive and complex types, along with features like type inference and user-defined types, Basktt provides a flexible framework for building diverse applications.