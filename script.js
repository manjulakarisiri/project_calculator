
const display = document.getElementById('display');


function append(value) {
  display.value += value;
}


function clearDisplay() {
  display.value = '';
}


function deleteLast() {
  display.value = display.value.slice(0, -1);
}


function calculate() {
  try {
    const expression = display.value.replace(/%/g, '/100');
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}


function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}


function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = 'Error';
  }
}


function cube() {
  try {
    display.value = Math.pow(eval(display.value), 3);
  } catch {
    display.value = 'Error';
  }
}


function power() {
  append('**');
}


function toggleTheme() {
  document.body.classList.toggle('light');
}


document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (/[0-9+\-*/.%()]/.test(key)) {
    append(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }

});
