Simple Unit Converter
A beginner-friendly multi-page Unit Converter web app built using HTML and JavaScript.
Each page allows you to convert between Length, Weight, or Temperature units.
When you click Convert, the page reloads visually to show only the result and a Reset button to start over.

Features


Three separate pages:


length.html – Convert millimeters, centimeters, meters, kilometers, inches, feet, yards, and miles.


weight.html – Convert milligrams, grams, kilograms, ounces, and pounds.


temperature.html – Convert Celsius, Fahrenheit, and Kelvin.




No backend required; all logic runs in the browser.


Dynamic page replacement: clicking Convert replaces the form with the result.


Reset button restores the original form.



File Structure
unit-converter/
│
├── index.js               # Core conversion logic and page behavior
├── length.html            # Length converter page
├── weight.html            # Weight converter page
└── temperature.html       # Temperature converter page


How It Works


The user inputs a numeric value and selects the units to convert from and to.


Clicking Convert:


Prevents the default form submission.


Performs the calculation using JavaScript.


Replaces the page content with the conversion result and a Reset button.




Clicking Reset reloads the page and restores the input form.



Example Flow
Input:
5 cm → m

After clicking Convert:
5 cm = 0.0500 m
[Reset]

After clicking Reset:
The input form reappears.

Conversion Logic
The convert() function in index.js handles all conversions.
Length example:
const conversion_rate = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.34
};

Temperature example:
if (from === "C" && to === "F") result = (value * 9 / 5) + 32;
if (from === "K" && to === "C") result = value - 273.15;

Each converter page calls:
setup("length");
setup("weight");
setup("temperature");

to initialize the correct category logic.

How to Run


Clone or download this repository:
git clone https://github.com/yourusername/unit-converter.git



Open any of the .html files in a web browser:


length.html


weight.html


temperature.html




Enter a value, select units, and click Convert.



Technologies Used


HTML5 for structure


Vanilla JavaScript (ES6) for logic and interactivity


No CSS or backend to keep the project simple and focused on functionality



Future Improvements


Add CSS styling and responsive design


Combine all converters into one single-page app


Add more conversion categories (volume, area, speed, etc.)


Include input validation and unit search



Author
Chioma Agosi
Student and aspiring Backend Engineer
Edmonton, Canada

