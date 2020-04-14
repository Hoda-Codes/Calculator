let buttons = document.querySelector(".calc-buttons");
let screen = document.querySelector(".calc-screen");
let buffer = 0;
let storedNum = 0;
let lastOperator;
let result = undefined;

function handleNumber(value) {
  if (buffer == 0) {
    buffer = value;
  } else {
    buffer += value;
  }
  screen.innerText = buffer;
}

function handleOperator(value) {
  switch (value) {
    case "+":
    case "−":
    case "÷":
    case "×":
      lastOperator = value;
      storedNum = Number(buffer);
      buffer = 0;
      break;

    case "%":
      screen.innerText = Number(screen.innerText) / 100;
      buffer = 0;
      break;
    case "⬅︎":
      screen.innerText = screen.innerText.substring(
        0,
        screen.innerText.length - 1
      );
      buffer = screen.innerText;
      break;
    case "AC":
      clear();
      break;
    case "⋅":
      buffer += ".";
      break;
    case "=":
      resolve();
      break;
  }
}

function resolve() {
  switch (lastOperator) {
    case "+":
      result = storedNum + Number(buffer);
      break;
    case "−":
      result = storedNum - Number(buffer);
      break;
    case "×":
      result = storedNum * Number(buffer);
      break;
    case "÷":
      result = storedNum / Number(buffer);
      break;
  }
  screen.innerText = result;
  buffer = result;
}

function clear() {
  lastOperator = undefined;
  storedNum = 0;
  buffer = 0;
  screen.innerText = buffer;
}

buttons.addEventListener("click", (e) => {
  let value = e.target.innerText;
  if (isNaN(value)) {
    handleOperator(value);
  } else {
    handleNumber(value);
    //screen.innerText += value;
  }
});
