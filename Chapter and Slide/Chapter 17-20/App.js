var multiArr = [[], [], []];

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

var tableNum = Number(prompt("Enter a number to show its multiplication table"));
var tableLen = Number(prompt("Enter length of multiplication table"));
document.write("Multiplication table of " + tableNum + " Length " + tableLen + "<br><br>");
for (var i = 1; i <= tableLen; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

document.write("<h3>Counting:</h3>");
var counting = "";
for (var i = 1; i <= 15; i++) { counting += i + ", "; }
document.write(counting + "<br>");

document.write("<h3>Reverse counting:</h3>");
var reverse = "";
for (var i = 10; i >= 1; i--) { reverse += i + ", "; }
document.write(reverse + "<br>");

document.write("<h3>Even:</h3>");
var even = "";
for (var i = 0; i <= 20; i += 2) { even += i + ", "; }
document.write(even + "<br>");

document.write("<h3>Odd:</h3>");
var odd = "";
for (var i = 1; i <= 19; i += 2) { odd += i + ", "; }
document.write(odd + "<br>");

document.write("<h3>Series:</h3>");
var series = "";
for (var i = 2; i <= 20; i += 2) { series += i + "k, "; }
document.write(series + "<br>");

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        found = true;
        alert(userInput + " is available at index " + i + " in our bakery");
        break;
    }
}
if (!found) {
    alert("We are sorry. " + userInput + " is not available in our bakery");
}

var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
document.write("Array items: " + numbers + "<br>");
document.write("The largest number is " + largest + "<br>");

var smallest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
document.write("The smallest number is " + smallest + "<br>");

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + ", ");
    }
}