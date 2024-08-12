let calculationsHistory = document.getElementsByClassName("history")[0];
let curentCalculation = document.getElementsByClassName("current")[0];
let numbers = document.querySelectorAll(".number");

let clear = document.getElementsByClassName("ac")[0];
let back = document.getElementsByClassName("back")[0];

clear.addEventListener("click", () => {
  calculationsHistory.innerHTML = "";
  curentCalculation.innerHTML = "";
});

back.addEventListener("click", () => {
  op = curentCalculation.innerHTML.split("");
  op.pop();
  curentCalculation.innerHTML = op.join("");
});
