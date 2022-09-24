// Set a class for the buttons
// select the class

const numPad1 = document.querySelector(".num-pad1");
const numPad2 = document.querySelector(".num-pad2");
const numPad3 = document.querySelector(".num-pad3");
const numPad4 = document.querySelector(".num-pad4");
const numPad5 = document.querySelector(".num-pad5");
const numPad6 = document.querySelector(".num-pad6");
const numPad7 = document.querySelector(".num-pad7");
const numPad8 = document.querySelector(".num-pad8");
const numPad9 = document.querySelector(".num-pad9");
const numPad0 = document.querySelector(".num-pad0");
const minusBtn = document.querySelector(".num-padMinus");
const plusBtn = document.querySelector(".num-padPlus");
const equalsBtn = document.querySelector(".num-padEquals");

const cBtn = document.querySelector(".num-padc");
let screen = document.querySelector(".display");

numPad1.addEventListener("click", function () {
  screen.innerText += Number(numPad1.innerText);
});

numPad2.addEventListener("click", function () {
  screen.innerText += Number(numPad2.innerText);
});

numPad3.addEventListener("click", function () {
  screen.innerText += Number(numPad3.innerText);
});
numPad4.addEventListener("click", function () {
  screen.innerText += Number(numPad4.innerText);
});
numPad5.addEventListener("click", function () {
  screen.innerText += Number(numPad5.innerText);
});
numPad6.addEventListener("click", function () {
  screen.innerText += Number(numPad6.innerText);
});
numPad7.addEventListener("click", function () {
  screen.innerText += Number(numPad7.innerText);
});
numPad8.addEventListener("click", function () {
  screen.innerText += Number(numPad8.innerText);
});
numPad9.addEventListener("click", function () {
  screen.innerText += Number(numPad9.innerText);
});
numPad0.addEventListener("click", function () {
  screen.innerText += Number(numPad0.innerText);
});
minusBtn.addEventListener("click", function () {
  screen.innerText += minusBtn.innerText;
});
plusBtn.addEventListener("click", function () {
  screen.innerText += plusBtn.innerText;
});

cBtn.addEventListener("click", function () {
  screen.innerText = "";
});

equalsBtn.addEventListener("click", function () {
  let a = screen.innerText;
  let b = eval(a);
  screen.innerText = b;
});

//cal v2 code goes here

const pads = document.querySelectorAll(".pad");
const padc = document.querySelector(".padc");
const equal = document.querySelector(".equals");
let screen2 = document.querySelector(".display-2");

pads.forEach((input) => {
  input.addEventListener("click", function () {
    screen2.innerText += input.innerText;
  });
});

padc.addEventListener("click", function () {
  screen2.innerText = "";
});

equal.addEventListener("click", function () {
  let a = screen2.innerText;
  let b = eval(a);
  screen2.innerText = b;
});

function del() {
  screen2.innerText = screen2.innerText.slice(0, -1);
}
