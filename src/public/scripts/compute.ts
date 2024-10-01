// Create a simple environment with ball.text
const environment = {
  ball: {
      text: (message) => {
          const outputElement = document.getElementById('output');
          outputElement.innerHTML += `<p>${message}</p>`;
      }
  }
};

// Define the available modules
const availableModules = {
  man: {
      ball: {
          text: (message) => {
              const outputElement = document.getElementById('output');
              outputElement.innerHTML += `<p>${message}</p>`;
          }
      }
  }
};

// Simple parser function
function parse(code) {
  const lines = code.split('\n').map(line => line.trim());
  const imports = [];
  const functions = [];
  let returnStatement = null;
  let currentFunction = null;

  lines.forEach(line => {
      if (line.startsWith('@use')) {
          const moduleName = line.split(' ')[1].replace(';', '');
          imports.push(moduleName);
      } else if (line.startsWith('fun')) {
          const functionName = line.split(' ')[1];
          currentFunction = { name: functionName, body: '' };
          functions.push(currentFunction);
      } else if (line.startsWith('return(')) {
          returnStatement = line.replace('return(', '').replace(');', '').trim();
      } else if (currentFunction && line.endsWith('}')) {
          currentFunction.body += line.replace('}', '');
          currentFunction = null;
      } else if (currentFunction) {
          currentFunction.body += line;
      }
  });

  return {
      imports,
      functions,
      returnStatement
  };
}

// Interpreter function to run parsed Basktt code
function runProgram(parsedCode) {
  // Handle imports
  parsedCode.imports.forEach((module) => {
      if (availableModules[module]) {
          Object.assign(environment, availableModules[module]);
      } else {
          console.error(`Module ${module} not found.`);
      }
  });

  // Execute the Main function
  parsedCode.functions.forEach((func) => {
      if (func.name === 'Main') {
          executeFunction(func);
      }
  });

  // Handle return statement
  if (parsedCode.returnStatement) {
      const outputElement = document.getElementById('output');
      if (parsedCode.returnStatement === 'nothing') {
          outputElement.innerHTML += `<p>Program returned nothing.</p>`;
      } else {
          outputElement.innerHTML += `<p>Program returned: ${parsedCode.returnStatement}</p>`;
      }
  }
}

// Execute function by evaluating its body
function executeFunction(func) {
  try {
      eval(`(function() { ${func.body} })()`);
  } catch (error) {
      console.error(`Error executing function ${func.name}: ${error.message}`);
  }
}

// Main function to handle execution
function runBasktt() {
  const baskttCode = (document.getElementById('baskttCode') as HTMLTextAreaElement).value;
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = ''; // Clear previous output

  const parsedCode = parse(baskttCode);
  runProgram(parsedCode);
}
