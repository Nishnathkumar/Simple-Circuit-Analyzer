function calculateResistance() {
    const circuitType = document.getElementById('circuitType').value;
    const resistorValues = document.getElementById('resistors').value.split(',').map(val => parseFloat(val.trim()));

    if (resistorValues.some(isNaN) || resistorValues.length === 0) {
        document.getElementById('result').innerText = "Please enter valid resistor values.";
        return;
    }

    let totalResistance;
    if (circuitType === 'series') {
        totalResistance = resistorValues.reduce((acc, curr) => acc + curr, 0);
    } else if (circuitType === 'parallel') {
        const reciprocalSum = resistorValues.reduce((acc, curr) => acc + 1 / curr, 0);
        totalResistance = reciprocalSum === 0 ? 0 : 1 / reciprocalSum;
    }

    document.getElementById('result').innerText = `Total Resistance: ${totalResistance.toFixed(2)} Ohms`;
}
