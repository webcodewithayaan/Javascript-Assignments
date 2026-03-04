var studentNamesLiteral = [];
var studentNamesObject = new Array();

var stringsArray = ["Apple", "Mango", "Banana"];
var numbersArray = [10, 20, 30];
var booleanArray = [true, false, true];
var mixedArray = ["Fuzail", 10, true, "Karachi"];

var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualifications:</h1>");
for (var i = 0; i < educationQualifications.length; i++) {
    document.write((i + 1) + ") " + educationQualifications[i] + "<br>");
}

var studentNames = ["Ali", "Basit", "Zain"];
var scores = [320, 230, 480];
var totalMarks = 500;
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}

var colors = ["Red", "Green", "Blue"];
document.write("<br>Original Colors: " + colors + "<br>");

var addStart = prompt("What color do you want to add to the beginning?");
colors.unshift(addStart);
var addEnd = prompt("What color do you want to add to the end?");
colors.push(addEnd);
colors.unshift("Yellow", "Purple");
colors.shift();
colors.pop();

var indexToAdd = prompt("At which index do you want to add a color?");
var colorToAdd = prompt("Enter color name:");
colors.splice(indexToAdd, 0, colorToAdd);

var indexToDelete = prompt("At which index do you want to delete color(s)?");
var countToDelete = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, countToDelete);
document.write("Updated Colors: " + colors + "<br>");

var studentScores = [320, 230, 480, 120];
document.write("<br>Scores of Students: " + studentScores);
studentScores.sort();
document.write("<br>Ordered Scores of Students: " + studentScores + "<br>");

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);
document.write("<br>Cities list: " + cities);
document.write("<br>Selected cities list: " + selectedCities + "<br>");

var arr = ["This", "is", "my", "cat"];
var joinedString = arr.join(" ");
document.write("<br>Array: " + arr);
document.write("<br>String: " + joinedString + "<br>");

var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("<br>Devices: " + devices + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");

var stack = [];
stack.push("keyboard");
stack.push("mouse");
stack.push("printer");
stack.push("monitor");
document.write("<br>Devices (LIFO): " + stack + "<br>");
document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<br><select>");
for (var j = 0; j < manufacturers.length; j++) {
    document.write("<option>" + manufacturers[j] + "</option>");
}
document.write("</select>");