var char = prompt("Enter a character (number or string)");
var code = char.charCodeAt(0);
if (code >= 48 && code <= 57) {
    alert("It is a number");
} else if (code >= 65 && code <= 90) {
    alert("It is an uppercase letter");
} else if (code >= 97 && code <= 122) {
    alert("It is a lowercase letter");
}

var int1 = Number(prompt("Enter first integer"));
var int2 = Number(prompt("Enter second integer"));
if (int1 > int2) {
    console.log(int1);
} else if (int2 > int1) {
    console.log(int2);
} else {
    console.log("Both are equal");
}

var num = Number(prompt("Enter a number"));
if (num > 0) {
    alert("Positive");
} else if (num < 0) {
    alert("Negative");
} else {
    alert("Zero");
}

var v = prompt("Enter a character").toLowerCase();
if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
    alert("True (It is a vowel)");
} else {
    alert("False");
}

var correctPass = "smit123";
var userPass = prompt("Enter your password");
if (!userPass) {
    alert("Please enter your password");
} else if (userPass === correctPass) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

var time = Number(prompt("Enter time in 24-hour format (e.g., 1900)"));
if (time >=1000 && time < 1200) {
    alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}