window.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.querySelector("button.add-btn");

  addBtn.addEventListener("click", (e) => {
    const firstNum = this.document.querySelector("#firstNumber").value;
    const secondNum = this.document.querySelector("#secondNumber").value;

    const add = Number(firstNum) + Number(secondNum);

    this.document.querySelector("#result").innerHTML = add;
  });

  const subtractBtn = this.document.querySelector("button.diff");

  subtractBtn.addEventListener("click", (e) => {
    const firstNum_diff = this.document.querySelector(".firstNum_diff").value;
    const secondNum_diff = this.document.querySelector(".secondNum_diff").value;

    const difference = firstNum_diff - secondNum_diff;

    this.document.querySelector(".result_diff").innerHTML = difference;
  });

  const mulBtn = this.document.querySelector("button.multiply");

  mulBtn.addEventListener("click", () => {
    const firstNum_mul = this.document.querySelector(".firstNum_mul").value;
    const secondNum_mul = this.document.querySelector(".secondNum_mul").value;

    const multiply = firstNum_mul * secondNum_mul;

    this.document.querySelector(".result_mul").innerHTML = multiply;
  });

  const divBtn = this.document.querySelector("button.divide");

  divBtn.addEventListener("click", () => {
    const firstNum_div = this.document.querySelector(".firstNum_div").value;
    const secondNum_div = this.document.querySelector(".secondNum_div").value;

    const div = firstNum_div / secondNum_div;

    this.document.querySelector(".result_div").innerHTML = div;
  });
});
