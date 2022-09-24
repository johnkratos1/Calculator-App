let screen = document.getElementById("inputtext");

let input = (number) => {
  screen.value += number;
};

let result = () => {
  try {
    screen.value = eval(screen.value);
  } catch (err) {
    alert("Enter a value input!");
  }
};

function clr() {
  screen.value = " ";
}

function del() {
  screen.value = screen.value.slice(0, -1);
}
