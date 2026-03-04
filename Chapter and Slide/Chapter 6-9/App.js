var a = 10;
document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("........................................<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><br>");

var userName = prompt("Enter your name:");
alert("Hello " + userName + "! Welcome to our page.");

var tableNum = prompt("Enter a number for the multiplication table:", 5);
document.write("<h2>Table of " + tableNum + "</h2>");
for(var i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}

var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");
var totalMarks = 100;
var marks1 = Number(prompt("Enter marks for " + sub1));
var marks2 = Number(prompt("Enter marks for " + sub2));
var marks3 = Number(prompt("Enter marks for " + sub3));

var obtainedTotal = marks1 + marks2 + marks3;
var grandTotal = totalMarks * 3;
var per1 = (marks1 / totalMarks) * 100;
var per2 = (marks2 / totalMarks) * 100;
var per3 = (marks3 / totalMarks) * 100;
var totalPer = (obtainedTotal / grandTotal) * 100;

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + per1 + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + per2 + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + per3 + "%</td></tr>");
document.write("<tr><th>Total</th><th>" + grandTotal + "</th><th>" + obtainedTotal + "</th><th>" + totalPer + "%</th></tr>");
document.write("</table>");