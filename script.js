let displayNumber = document.querySelector(".display_number");
let displayOp = document.querySelector(".display_op");
let click = document.querySelectorAll(".row div");
let clear = document.querySelector("#f1");
let delet = document.querySelector("#f2");
let ar = ["÷", "x", "-", "+", "."];
let val = [];
let value = 0;
let op = "";

click.forEach((item) => {
  item.addEventListener("click", () => {
    if (ar.indexOf(item.innerText) > -1) {
      op = item.innerText;
      displayOp.innerText = op;
      console.log(op);
      val.push(value);
      value = 0;
      
    } else {
      if (item.innerText == "=") {
        val.push(value);
        console.log(val);
        value = 0;
        displayOp.innerText = "";
        if (op == "÷") {
          value = val[0] / val[1];
        } else if (op == "x") {
          value = val[0] * val[1];
        } else if (op == "-") {
          value = val[0] - val[1];
        } else if (op == "+") {
          value = val[0] + val[1];
        }
        displayNumber.innerText = value;
        val = [value];
      } else {
        value = value * 10 + parseInt(item.innerText);
        displayNumber.innerText = value;
        console.log(value);
      }
    }
  });
});

clear.addEventListener("click", () => {
  displayNumber.innerText = 0;
    displayOp.innerText = "";
  value = 0;
  val = [];
});
