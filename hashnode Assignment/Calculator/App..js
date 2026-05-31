// Theme Toggle Management
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = bodyElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        bodyElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'bi bi-sun';
    } else {
        bodyElement.setAttribute('data-theme', 'light');
        themeIcon.className = 'bi bi-moon-stars';
    }
});

// Calculator Math Calculations Configuration
const expressionDisplay = document.getElementById('expressionDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const grid = document.querySelector('.calc-grid');

let expression = '';
let evaluated = false;

// Mock starter screen data initialization corresponding to screenshot design
expressionDisplay.innerText = '100 + 49 + 7 + 451 + 30';
resultDisplay.innerText = '637';
expression = '100+49+7+451+30';

grid.addEventListener('click', (e) => {
    const target = e.target.closest('button');
    if (!target) return;

    const val = target.dataset.val;
    const action = target.dataset.action;

    if (val !== undefined) {
        handleNumberOrOperator(val);
    } else if (action) {
        handleAction(action);
    }
    updateDisplay();
});

function handleNumberOrOperator(val) {
    if (evaluated && !isNaN(val)) {
        expression = '';
        evaluated = false;
    } else if (evaluated && isNaN(val)) {
        evaluated = false;
    }
    
    // Stop sequential multi-operator additions error
    if (isNaN(val) && val !== '.') {
        const lastChar = expression.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            expression = expression.slice(0, -1);
        }
    }
    expression += val;
}

function handleAction(action) {
    switch (action) {
        case 'clear':
            expression = '';
            resultDisplay.innerText = '0';
            evaluated = false;
            break;
        case 'delete':
            if (!evaluated) {
                expression = expression.toString().slice(0, -1);
            }
            break;
        case 'percent':
            if (expression) {
                try {
                    let res = eval(expression.replace(/×/g, '*').replace(/÷/g, '/')) / 100;
                    expression = res.toString();
                    evaluated = true;
                } catch {
                    expression = 'Error';
                }
            }
            break;
        case 'negate':
            if (expression && !evaluated) {
                if(expression.startsWith('-')) {
                    expression = expression.slice(1);
                } else {
                    expression = '-' + expression;
                }
            }
            break;
        case 'calculate':
            if (expression) {
                try {
                    let formattedExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
                    let res = eval(formattedExpression);
                    
                    if (res % 1 !== 0) {
                        res = parseFloat(res.toFixed(8));
                    }
                    
                    resultDisplay.innerText = res;
                    evaluated = true;
                } catch (err) {
                    resultDisplay.innerText = 'Error';
                }
            }
            break;
    }
}

function updateDisplay() {
    // Beautiful text conversions for clean display markup
    let viewText = expression
        .replace(/\*/g, ' × ')
        .replace(/\//g, ' ÷ ')
        .replace(/\+/g, ' + ')
        .replace(/\-/g, ' − ');
        
    expressionDisplay.innerText = viewText || '0';
    if (!evaluated) {
        if(!expression) {
            resultDisplay.innerText = '0';
        } else {
            // Live Preview Calculation Track Trace
            try {
                let preview = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
                if (preview !== undefined && !isNaN(preview)) {
                    if (preview % 1 !== 0) preview = parseFloat(preview.toFixed(4));
                    resultDisplay.innerText = preview;
                }
            } catch {}
        }
    }
}