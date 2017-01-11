var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert("Add:" + add(number1, number2));
alert("Subtract:" + subtract(number1, number2));
alert("Multiply:" + multiply(number1, number2));
alert("Divide:" + divide(number1, number2));




// BMI Calculator
var height = parseFloat( prompt("How tall are you? (inch)"));
var weight = parseFloat( prompt("How much do you weigh? (pound)"));

var heightConverter = function(height){
	return (height * .0254).toPrecision(4);

};

var weightConverter = function(poundWeight){
	return (poundWeight * .45).toPrecision(4);
};

var BMI = function(mHeight, kgWeight){
	return (kgWeight/(mHeight * mHeight)).toPrecision(4);
};


alert(heightConverter(height) + "m");
alert(weightConverter(weight) + "kg");


alert("Your BMI is " + BMI(heightConverter(height), weightConverter(weight)) + ".");


// Fahrenheit to Celsius Converter

var CStemp = function(FHtemp) {
	return ((FHtemp - 32)/1.8).toFixed(2);
};

alert(CStemp(30));

// grams to ounces Converter


var userInputGrams = parseFloat(prompt("Type the weight in grams."));

var ozMeasure = function(gMeasure) {
	return (gMeasure / 28.35).toFixed(2);
};

alert("The result is:" + ozMeasure(userInputGrams) + " in ounces.");

// tsp to ML Converter


var tspInput = prompt("Please enter the number of TSP:");

var tspML = function(tspInput) {
	return (tspInput * 4.93).toFixed(2);
}

alert("The amount is " + tspML(tspInput) + "in milliliters.");
