function calculate() {
    // Get coefficients for the equations
    const a1 = parseFloat(document.getElementById("a1").value);
    const b1 = parseFloat(document.getElementById("b1").value);
    const c1 = parseFloat(document.getElementById("c1").value);
    const d1 = parseFloat(document.getElementById("d1").value);

    const a2 = parseFloat(document.getElementById("a2").value);
    const b2 = parseFloat(document.getElementById("b2").value);
    const c2 = parseFloat(document.getElementById("c2").value);
    const d2 = parseFloat(document.getElementById("d2").value);

    const a3 = parseFloat(document.getElementById("a3").value);
    const b3 = parseFloat(document.getElementById("b3").value);
    const c3 = parseFloat(document.getElementById("c3").value);
    const d3 = parseFloat(document.getElementById("d3").value);

    // Check if all inputs are valid numbers
    if (isNaN(a1) || isNaN(b1) || isNaN(c1) || isNaN(d1) ||
        isNaN(a2) || isNaN(b2) || isNaN(c2) || isNaN(d2) ||
        isNaN(a3) || isNaN(b3) || isNaN(c3) || isNaN(d3)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers for all coefficients.";
        return;
    }

    // Calculate determinants using Cramer's rule
    const D = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);
    if (D === 0) {
        document.getElementById("result").innerHTML = "The system of equations has no unique solution (D=0).";
        return;
    }

    const Di1 = d1 * (b2 * c3 - b3 * c2) - b1 * (d2 * c3 - d3 * c2) + c1 * (d2 * b3 - d3 * b2);
    const Di2 = a1 * (d2 * c3 - d3 * c2) - d1 * (a2 * c3 - a3 * c2) + c1 * (a2 * d3 - a3 * d2);
    const Di3 = a1 * (b2 * d3 - b3 * d2) - b1 * (a2 * d3 - a3 * d2) + d1 * (a2 * b3 - a3 * b2);

    // Calculate i1, i2, i3
    const i1 = Di1 / D;
    const i2 = Di2 / D;
    const i3 = Di3 / D;

    // Display the result
    document.getElementById("result").innerHTML = `
        <strong>Solution:</strong><br>
        i1 = ${i1.toFixed(2)}, i2 = ${i2.toFixed(2)}, i3 = ${i3.toFixed(2)}
    `;
}
