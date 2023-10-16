let count = 0;
console.log(count);

value = document.getElementById("count-value");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const reset = document.getElementById("reset");

increaseButton.addEventListener("click", function () {
  count++;
  value.textContent = count;
});

decreaseButton.addEventListener("click", function () {
  count--;
  value.textContent = count;
});

reset.addEventListener("click", function () {
  count = 0;
  value.textContent = count;
});
