let screen = document.getElementsByClassName("screen")[0];
let keys = document.querySelector(".keys");

let numbers = document.querySelectorAll(".number");
let operation = document.querySelectorAll(".operation");

let equal = document.getElementsByClassName("equal")[0];
let clearBtn = document.getElementsByClassName("ac")[0];
let backBtn = document.getElementsByClassName("back")[0];

function append(number) {
  screen.textContent += number.textContent;
}

function calculat() {
  try {
    f = screen.textContent;
    clear();
    screen.textContent = eval(f);
  } catch (e) {
    window.alert(e);
  }
}

function clear() {
  screen.innerHTML = "";
}

function back() {
  op = screen.innerHTML.split("");
  op.pop();
  screen.innerHTML = op.join("");
}

[...numbers, ...operation].forEach((number) => {
  number.addEventListener("click", () => {
    append(number);
  });
});

equal.addEventListener("click", calculat);

clearBtn.addEventListener("click", clear);

backBtn.addEventListener("click", back);

[...keys.children].forEach((element) =>
  element.addEventListener("click", () => {
    element.animate(
      [{ boxShadow: "0 8px 12px 0px rgb(0 0 0 / 46%)" }, { boxShadow: "none" }],
      { duration: 150 }
    );
  })
);
