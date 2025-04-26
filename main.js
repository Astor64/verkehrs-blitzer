"use strict";

function main() {
  let inputSpeed = document.getElementById("speed");
  let inputDirection = document.getElementById("direction");
  let inputSpeedCamera = document.getElementById("speedCamera");
  let speed = inputSpeed.value;
  let isFacing = inputDirection.checked;
  let speedCamera = inputSpeedCamera.value;

  if (speed > (speedCamera / 100) * 10 + speedCamera && isFacing == true) {
    alert("Du wurdest geblitzt");
  }

  // ein inputfeld zur Geschwindigkeitseingabe plus 10% Toleranz
  // console.log(speed);

  // console.log(isFacing);
  // console.log(speedCamera);
}
