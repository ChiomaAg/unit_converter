
function convert(value, from, to, category) {
    value = parseFloat(value)
    if (isNaN(value)) return "—";

    if (category === 'length') {

        const conversion_rate = {
            mm: 0.001, cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.34
        };

        result = value * conversion_rate[from] / conversion_rate[to]
        console.log(result)
        return result
    }
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const lengthValue = document.getElementById("value").value;
    const convertFrom = document.getElementById("fromUnit").value;
    const convertTo = document.getElementById("toUnit").value;

    convert(lengthValue, convertFrom, convertTo, "length");

    document.body.innerHTML = `
    <h1>Conversion Result</h1>
    <p>${lengthValue} ${convertFrom} = ${result.toFixed(4)} ${convertTo}</p>
    <button id="resetBtn">Reset</button>
  `;

    // Add reset behavior
    document.getElementById("resetBtn").addEventListener("click", function () {
        window.location.reload(); // reloads the original form page
    });

})


