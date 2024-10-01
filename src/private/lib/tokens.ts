// Import necessary classes from basktt library
import { Code } from './lib';

// Function to interpret and run Basktt code
export function runBaskttCode(code: string) {
    // Tokenizer function
    function tokenize(input: string) {
        const regex = /\s*(=>|{|}|;|if|else|return|"\w+"|[\w$]+|.)\s*/g;
        return input.split(regex).filter(token => token.length > 0);
    }

    // Interpreter function
    function interpret(tokens: string[]) {
        let index = 0;

        function parseExpression() {
            const token = tokens[index++];

            // Handle variable assignments or strings
            if (token === 'var') {
                const name = tokens[index++];
                if (tokens[index++] !== '=') throw new Error('Expected =');
                const value = tokens[index++];
                return { type: 'var', name, value };
            } else if (token === 'return') {
                const value = tokens[index++];
                return { type: 'return', value };
            } else if (token === 'if') {
                const condition = tokens[index++];
                const block = parseBlock();
                return { type: 'if', condition, block };
            }
            // Add more parsing logic as needed for your Basktt language
            throw new Error(`Unexpected token: ${token}`);
        }

        function parseBlock() {
            const block = [];
            while (tokens[index] !== '}') {
                block.push(parseExpression());
            }
            index++; // Skip closing brace
            return block;
        }

        while (index < tokens.length) {
            const expression = parseExpression();
            executeExpression(expression);
        }
    }

    // Execute parsed expressions
    function executeExpression(expression: any) {
        switch (expression.type) {
            case 'var':
                Code.ball(() => {
                    Code.text(`Variable ${expression.name} set to ${expression.value}`);
                });
                break;
            case 'return':
                Code.ball(() => {
                    Code.text(`Returning: ${expression.value}`);
                });
                break;
            case 'if':
                Code.if(expression.condition === 'true', () => {
                    expression.block.forEach(executeExpression);
                });
                break;
            default:
                throw new Error(`Unknown expression type: ${expression.type}`);
        }
    }

    // Tokenize and interpret the provided code
    const tokens = tokenize(code);
    interpret(tokens);
}
