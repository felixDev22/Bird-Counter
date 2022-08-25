// const counter = document.getElementById("count-el");
// console.log((counter.innerText = "5"));

let count = 0;
let counter = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  counter.innerText = count;
}
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  counter.innerText = 0;
  count = 0;
}
