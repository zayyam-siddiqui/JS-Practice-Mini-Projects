const clock = document.querySelector("#clock");

setInterval(function () {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  clock.innerHTML = currentTime;
}, 1000);
