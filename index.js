
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
    else if (category === 'weight') {

        const conversion_rate = {
            mg: 0.001, g: 1, kg: 1000, oz: 28.35, lb: 453.592
        }

        result = value * conversion_rate[from] / conversion_rate[to]
        console.log(result)
        return result
    }

    else if (category === 'temperature') {

        if (from == "C" && to == "F") {
            result = (value * 9 / 5) + 32;
        }
        if (from === 'C' && to === 'K') {
            result = value + 273.15
        }
        if (from === 'F' && to === 'C') {
            result = (value - 32) * 5 / 9;
        }
        if (from === 'F' && to === 'K') {
            result = (value - 32) * 5 / 9 + 273.15;
        }
        if (from === 'K' && to === 'C') {
            result = value - 273.15;
        }
        if (from === 'K' && to === 'F') {
            result = (value - 273.15) * 9 / 5 + 32;
        }

        console.log(result)
        return result
    }
}

function setup(measurement) {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        const lengthValue = document.getElementById("value").value;
        const convertFrom = document.getElementById("fromUnit").value;
        const convertTo = document.getElementById("toUnit").value;

        convert(lengthValue, convertFrom, convertTo, measurement);

        document.body.innerHTML = `
        <h1>Conversion Result</h1>
        <p>${lengthValue} ${convertFrom} = ${result.toFixed(2)} ${convertTo}</p>
        <button id="resetBtn">Reset</button>
        `;

        // Add reset behavior
        document.getElementById("resetBtn").addEventListener("click", function () {
            window.location.reload(); // reloads the original form page
        });

    })
}

