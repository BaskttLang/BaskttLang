# BaskttLang v2 syntax

### hello, world!
```
```
@use man

fun Main() => {
   ball.text("Hello, world")
}

return(nothing)
```

### Types

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

### functions
fun add(a: Number, b: Number) => {
    return(a + b);
}

### External interpretation

```typescript
// this is a Typescript implemented example
import * as basktt from '@basktt/langlib';
const basktt = new Code(null);
function Main() {
// main function
Code.ball(Set.var(name === `
"Miguel",
"Johnny",
`));
Code.ball(text("Hello, ${name}!"));
Code.ball(return(null));
Code.ball(if(name === "Miguel") {
ball.text("Hello, " + $name + "!");
});
Code.ball(if(name === "Johnny") {
ball.do(null);
});
}
```

