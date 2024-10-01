export interface ParsedCode {
    imports: string[];
    functions: {
        name: string;
        body: string;
    }[];
    returnStatement: string | null;
}

export interface IfStatement {
    condition: string; // Represents the condition
    body: string;     // Represents the body of the if statement
}

export function parse(code: string): ParsedCode {
    const lines = code.split('\n').map(line => line.trim());
    const imports: string[] = [];
    const functions: { name: string; body: string; }[] = [];
    let returnStatement: string | null = null;
    let currentFunction: { name: string; body: string } | null = null;
    let insideIfStatement: boolean = false;
    let currentIfStatement: IfStatement | null = null;

    lines.forEach(line => {
        // Parse imports
        if (line.startsWith('@use')) {
            const moduleName = line.split(' ')[1].replace(';', '');
            imports.push(moduleName);
        }
        
        // Parse functions
        else if (line.startsWith('fun')) {
            const functionName = line.split(' ')[1];
            currentFunction = { name: functionName, body: '' };
            functions.push(currentFunction);
        }

        // Parse return statement
        else if (line.startsWith('return(')) {
            returnStatement = line.replace('return(', '').replace(');', '').trim();
        }

        // Parse if statement
        else if (line.startsWith('if(')) {
            insideIfStatement = true;
            currentIfStatement = { condition: line.replace('if(', '').replace(') {', '').trim(), body: '' };
        }

        // Handle closing of if statement
        else if (insideIfStatement && line === '}') {
            if (currentIfStatement) {
                currentIfStatement.body += line.replace('}', '');
                currentFunction.body += `if (${currentIfStatement.condition}) { ${currentIfStatement.body} }`;
                currentIfStatement = null;
                insideIfStatement = false;
            }
        } 
        // Collect function body or if statement body
        else if (currentFunction) {
            if (insideIfStatement) {
                currentIfStatement.body += line; // Collect lines for the if body
            } else {
                currentFunction.body += line; // Continue function body
            }
        }
    });

    return {
        imports,
        functions,
        returnStatement
    };
}
