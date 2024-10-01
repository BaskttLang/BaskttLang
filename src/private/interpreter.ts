import { man } from './commands/man';
import * as readline from 'readline';

interface ParsedFunction {
    name: string;
    body: string;
}

interface ParsedCode {
    imports: string[];
    functions: ParsedFunction[];
    returnStatement: string | null;
}

const environment: { [key: string]: any } = {
    ball: {
        text: (message: string) => {
            console.log(message);
        }
    }
};

// Import command handler
const availableModules: { [key: string]: any } = {
    man
};

export function runProgram(parsedCode: ParsedCode) {
    // Step 1: Handle imports
    parsedCode.imports.forEach((module: string) => {
        if (availableModules[module]) {
            console.log(`Using ${module} module...`);
            Object.assign(environment, availableModules[module]);
        } else {
            console.error(`Error: Module '${module}' not found.`);
        }
    });

    // Step 2: Execute the Main function (or other functions)
    parsedCode.functions.forEach((func) => {
        if (func.name === 'Main') {
            executeFunction(func);
        }
    });

    // Step 3: Handle return statement
    if (parsedCode.returnStatement) {
        if (parsedCode.returnStatement === 'nothing') {
            console.log('Program returned nothing.');
        } else {
            console.log(`Program returned: ${parsedCode.returnStatement}`);
        }
    }
}

function executeFunction(func: ParsedFunction) {
    // Step 4: Execute the function body within the environment
    try {
        // Use `eval` to execute the code within the function body
        const wrappedCode = `(function() { ${func.body} })()`;
        eval(wrappedCode);
    } catch (error) {
        console.error(`Error executing function ${func.name}:`, error.message);
    }
}

interface Statement {
    type: string;
    condition?: any;
    body?: Statement[];
}

function evaluate(statements: Statement[]) {
    for (const statement of statements) {
        switch (statement.type) {
            case 'IfStatement':
                if (evaluateCondition(statement.condition)) {
                    evaluate(statement.body); // Execute the body if condition is true
                }
                break;
            // Handle other statement types...
        }
    }
}

function evaluateCondition(condition: any): boolean {
    // Simplified example: Assume condition is { left, operator, right }
    const { left, operator, right } = condition;

    switch (operator.value) {
        case '===':
            return left.value === right.value; // Basic equality check
        // Add more operators as needed...
        default:
            throw new Error(`Unknown operator: ${operator.value}`);
    }
}