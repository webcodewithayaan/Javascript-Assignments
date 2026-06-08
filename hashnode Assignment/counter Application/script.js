// Initial count value
let count = 0;

// Select value and buttons
const valueElement = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

// Loop through all buttons to add event listeners
buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        
        // Determine action based on class name
        if (styles.contains('btn-decrease')) {
            count--;
        } else if (styles.contains('btn-increase')) {
            count++;
        } else {
            count = 0;
        }

        // Change text color based on count value
        if (count > 0) {
            valueElement.style.color = "#10b981"; // Emerald Green
        } else if (count < 0) {
            valueElement.style.color = "#ef4444"; // Red
        } else {
            valueElement.style.color = "#333333"; // Default dark gray
        }

        // Update the display text
        valueElement.textContent = count;
    });
});