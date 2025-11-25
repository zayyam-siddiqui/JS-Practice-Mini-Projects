const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");
console.log(body);
console.log(buttons);
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    if (event.target.id === "dustyRose") {
      body.style.backgroundColor = "rgb(170,111,115)";
    }
    if (event.target.id === "sageGreen") {
      body.style.backgroundColor = "rgb(141,152,141)";
    }
    if (event.target.id === "periwinkleGray") {
      body.style.backgroundColor = "rgb(151,153,186)";
    }
    if (event.target.id === "terraCotta") {
      body.style.backgroundColor = "rgb(202,127,104)";
    }
  });
});
