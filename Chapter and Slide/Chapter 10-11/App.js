var city = prompt("Enter your city name");
if (city === "Karachi") {
    alert("Welcome to city of lights");
}

var gender = prompt("Enter your gender");
if (gender === "male") {
    alert("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Ma'am");
}

var signalColor = prompt("Enter traffic signal color");
if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to move");
} else if (signalColor === "green") {
    alert("Move now");
}

var fuel = Number(prompt("Enter remaining fuel in car (in litres)"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

var marks1 = Number(prompt("Enter marks for subject 1"));
var marks2 = Number(prompt("Enter marks for subject 2"));
var marks3 = Number(prompt("Enter marks for subject 3"));
var totalMarks = Number(prompt("Enter total marks"));
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + obtainedMarks + "<br>");
document.write("Percentage : " + percentage + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");

var secretNum = 7;
var userGuess = Number(prompt("Guess the secret number (1 to 10)"));
if (userGuess === secretNum) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNum) {
    alert("Close enough to the correct answer");
}

var num = Number(prompt("Enter a number to check if it is divisible by 3"));
if (num % 3 === 0) {
    alert("The number is divisible by 3");
}

var evenOddNum = Number(prompt("Enter a number to check if it is even or odd"));
if (evenOddNum % 2 === 0) {
    alert("It is an even number");
} else {
    alert("It is an odd number");
}

var temp = Number(prompt("Enter temperature"));
if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

var firstNum = Number(prompt("Enter first number"));
var secondNum = Number(prompt("Enter second number"));
var operation = prompt("Enter operation (+, -, *, /, %)");
if (operation === "+") {
    alert(firstNum + secondNum);
} else if (operation === "-") {
    alert(firstNum - secondNum);
} else if (operation === "*") {
    alert(firstNum * secondNum);
} else if (operation === "/") {
    alert(firstNum / secondNum);
} else if (operation === "%") {
    alert(firstNum % secondNum);
}