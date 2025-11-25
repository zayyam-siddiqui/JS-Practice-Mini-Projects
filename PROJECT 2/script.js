const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (
    (height === "" || height < 0 || isNaN(height)) &&
    (weight === "" || weight < 0 || isNaN(weight))
  ) {
    result.innerHTML = `Please provide a valid Height and Weight`;
  } else if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please provide a valid Height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please provide a valid Weight`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.style.width = "20%";
    result.style.height = "20%";
    result.style.marginTop = "0.8rem";
    result.style.marginLeft = "auto";
    result.style.marginRight = "auto";
    result.style.display = "block";
    result.style.padding = "1.2rem 1.2rem";
    result.style.borderRadius = "1.5rem";
    result.style.backgroundColor = "rgb(150, 132, 156)";
    result.style.color = "rgba(255, 255, 255, 1)";
    result.innerHTML = `<span>${BMI}</span>`;
  }
});
