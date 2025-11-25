let valid = null;

const colorchange = function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
};

document.getElementById("start").addEventListener("click", function () {
  if (!valid) {
    valid = setInterval(colorchange, 1000);
  }
});
document.getElementById("stop").addEventListener("click", function () {
  clearInterval(valid);
  valid = null;
});
