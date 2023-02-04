//let brownKeys = [`/`, `x`, `-`, `=`, `+`];
// document.querySelectorAll(`brownKeys`);
// brownKeys.style.backgroundColor = "brown";

//1 нужно заселектить все цифровые кнопки
//2  заселектить дисплей
//3 по клику на клавишу нам нужно доставать иннер текст и класть в отупут

const display = document.querySelector(`.display`);
const calculator = document.querySelector(`.calculator`);

let firstOperand = null;
let secondOperand = null;
let operator = null;

calculator.addEventListener(`click`, function (event) {
  if (event.target.classList.contains(`digit`)) {
    const digitContent = event.target.innerText;
    display.innerHTML = display.innerHTML + digitContent;
  }

  if (event.target.classList.contains(`operator`)) {
    operator = event.target.innerText;
    firstOperand = display.innerHTML;
    display.innerHTML = "";
  }

  console.log(firstOperand, secondOperand, operator);
});

console.log(display);
