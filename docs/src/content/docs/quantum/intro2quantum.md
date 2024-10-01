---
title: What? Quantum Computing?!
---

Yes! I'm developing an Quantum Computer development SDK for Basktt!.
It will be compiled to OpenQASM!

### An little example:

Input code
```basktt
@use man; // import base syntax module
@use qpu; // import QPU support language
@use typos;
@use assembly_runner;
@use bask2qasm;

// Qubit class definition
class Qubit {
    var state; // Holds the state of the qubit

    // Constructor to initialize the qubit state
    fun __init__(initState) => {
        state = initState;
    }

    // Function to measure the qubit state
    fun measure() => {
        return(state); // Return the current state
    }
}

// QuantumCircuit class definition
class Circuit {
    var qubits; // Array of qubits
    var gates; // Array to hold applied gates

    // Constructor to initialize the circuit with a given number of qubits
    fun __init__(numQubits) => {
        qubits = []; // Initialize the qubit array
        gates = []; // Initialize the gates array

        // Create qubits and add them to the array
        for (var i = 0; i < numQubits; i = i + 1) => {
            qubits.push(new Qubit(0)); // Initialize qubit state to 0
        }
    }

    // Function to apply a Hadamard gate
    fun H(qubitIndex) => {
        gates.push("H on Qubit " + qubitIndex); // Record the gate
        qubits[qubitIndex].state = 1; // Simplified effect of H gate
    }

    // Function to apply a CNOT gate
    fun CNOT(controlIndex, targetIndex) => {
        gates.push("CNOT from Qubit " + controlIndex + " to Qubit " + targetIndex); // Record the gate
        // Simple logic to flip the target qubit if control is 1
        if (qubits[controlIndex].state == 1) => {
            qubits[targetIndex].state = qubits[targetIndex].state == 0 ? 1 : 0; // Flip the target state
        }
    }

    // Function to execute the circuit and get the measurement results
    fun execute() => {
        var results = [];
        for (var qubit in qubits) => {
            results.push(qubit.measure()); // Measure each qubit
        }
        return(results); // Return the measurement results
    }
}

// Example usage of the Quantum Module
fun Main => {
    var circuit = new Circuit(2); // Create a circuit with 2 qubits
    circuit.H(0); // Apply Hadamard gate on qubit 0
    circuit.CNOT(0, 1); // Apply CNOT gate with qubit 0 as control and qubit 1 as target
    var results = circuit.execute(); // Execute the circuit and get results

    ball.text(results); // Print the results
}

return(nothing);

```

OpenQASM output code (Compiled code)
```qasm
// Import the QASM libraries
include "qelib1.inc"; // Include the standard library for quantum gates

// Define a quantum circuit
qubit q[2]; // Declare an array of 2 qubits
bit c[2]; // Declare a classical bit array for measurement results

// Apply a Hadamard gate on the first qubit
h q[0];

// Apply a CNOT gate with the first qubit as control and the second as target
cx q[0], q[1];

// Measure the qubits
measure q[0] -> c[0]; // Measure the first qubit into the first classical bit
measure q[1] -> c[1]; // Measure the second qubit into the second classical bit

// End of the circuit
```
Compiled to Qiskit (Python)
```python
# Import necessary libraries from Qiskit
from qiskit import QuantumCircuit, Aer, transpile, assemble, execute
from qiskit.visualization import plot_histogram

# Create a quantum circuit with 2 qubits and 2 classical bits
circuit = QuantumCircuit(2, 2)

# Apply a Hadamard gate to the first qubit
circuit.h(0)

# Apply a CNOT gate with the first qubit as control and the second qubit as target
circuit.cx(0, 1)

# Measure the qubits into classical bits
circuit.measure([0, 1], [0, 1])

# Draw the circuit
print(circuit.draw())

# Use the Aer's qasm_simulator
simulator = Aer.get_backend('qasm_simulator')

# Transpile and assemble the circuit for the simulator
compiled_circuit = transpile(circuit, simulator)
qobj = assemble(compiled_circuit)

# Execute the circuit on the qasm simulator
result = execute(compiled_circuit, backend=simulator, shots=1024).result()

# Get the results
counts = result.get_counts(circuit)

# Print the measurement results
print(counts)

# Plot a histogram of the results
plot_histogram(counts).show()

```
