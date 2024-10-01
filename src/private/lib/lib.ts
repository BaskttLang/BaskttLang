interface Action {
    name: string;
    action: () => void; // This is a function type
}

// Example class that uses the Action interface
class ActionManager {
    private actions: Action[] = []; // Store actions

    // Correctly define the addAction method with a parameter type
    addAction(action: Action) { // Specify Action type for the parameter
        this.actions.push(action); // Add the action to the array
    }
}

// Example usage
const manager = new ActionManager();
manager.addAction({
    name: "Example Action",
    action: () => {
        console.log("Action executed");
    }
});

export class Code {
    private context: any;


    constructor(context: any) {
        this.context = context || {};
    }

    public static ball(action: any) {
        console.log('Executing action:', action);
    }

    public static var(variable: any) {
        return variable;
    }

    public static text(message: string) {
        console.log(message);
    }

    public static if(condition: boolean, action: () => void) {
        if (condition) {
            action
        }
    }

    public static do(action: () => void) {
        action();
    }

    // Add more static methods as needed
}

// Function to interpret and run Basktt code
export function runBaskttCode(code: string) {
    // Example: Evaluate the code using eval (for demonstration purposes)
    // NOTE: Using eval is generally discouraged due to security risks.
    // Consider using a safer parser/interpreter for real use cases.
    eval(code);
}
