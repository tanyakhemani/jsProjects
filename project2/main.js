window.addEventListener("DOMContentLoaded", function () {
  const addButton = this.document.querySelector(".addBtn");
  const subtractButton = this.document.querySelector(".subtractBtn");
  const multiplyButton = this.document.querySelector(".multiplyBtn");
  const divideButton = this.document.querySelector(".divideBtn");

  const firstNumberEl = this.document.querySelector(".firstNum");
  const secondNumberEl = this.document.querySelector(".secondNum");
  const resultEl = this.document.querySelector(".result");

  addButton.addEventListener("click", () => {
    const firstNumber = firstNumberEl.value;
    const secondNumber = secondNumberEl.value;

    const result = Number(firstNumber) + Number(secondNumber);

    resultEl.innerHTML = result;
  });

  subtractButton.addEventListener("click", () => {
    const firstNumber = firstNumberEl.value;
    const secondNumber = secondNumberEl.value;

    const result = Number(firstNumber) - Number(secondNumber);

    resultEl.innerHTML = result;
  });

  multiplyButton.addEventListener("click", () => {
    const firstNumber = firstNumberEl.value;
    const secondNumber = secondNumberEl.value;

    const result = Number(firstNumber) * Number(secondNumber);

    resultEl.innerHTML = result;
  });

  divideButton.addEventListener("click", () => {
    const firstNumber = firstNumberEl.value;
    const secondNumber = secondNumberEl.value;

    const result = Number(firstNumber) / Number(secondNumber);

    resultEl.innerHTML = result;
  });
});
