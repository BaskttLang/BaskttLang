export function interpret(code: string): void {
    const lines = code.split('\n');
  for (const line of lines) {
    if (line.trim().startsWith('@use')) {
      const moduleName = line.trim().substring('@use '.length);
      console.log(`Using module: ${moduleName}`);
    } else if (line.trim().startsWith('fun')) {
      const functionName = line.trim().substring('fun '.length).split(' ')[0];
      console.log(`Found function: ${functionName}`);
      if (functionName === 'Main') {
        const ball = {
          text: (text: string) => {
            console.log(`Ball text set to: ${text}`);
          }
        };
        // Execute function body
        const functionBody = line.substring(line.indexOf('{') + 1, line.lastIndexOf('}'));
        const functionLines = functionBody.split(';');
        for (const functionLine of functionLines) {
          if (functionLine.trim().startsWith('ball.text')) {
            const text = functionLine.trim().substring('ball.text('.length, functionLine.trim().lastIndexOf(')'));
            ball.text(text);
          }
        }
      }
    }
  }


  console.log(`Interpreting Basktt code: ${code}`);
}

export function cli() {
    const prompt = require('prompt-sync')();
    const code = prompt('Enter Basktt code: ');
    interpret(code);
}