const convertBtn = document.getElementById("convert-btn");
const darkConvertButton = document.getElementById("d-convert-btn");
let inputNumber = document.getElementById("input-number");
let dInputNumber = document.getElementById("d-input-number");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");
let dLength = document.getElementById("d-length");
let dVolume = document.getElementById("d-volume");
let dMass = document.getElementById("d-mass");

convertBtn.addEventListener("click", function () {
  let number = inputNumber.value;
  let lengthAns = number * 3.281;
  let litresAns = number * 0.264;
  let massAns = number * 2.204;
  let ans = `${number} meters = ${lengthAns.toFixed(2)} feet | ${lengthAns.toFixed(2)} feet = ${number} meters `;
  let anslT = `${number} litres = ${litresAns.toFixed(2)} gallons | ${litresAns.toFixed(2)} gallons = ${number} litres`;
  let ansM = `${number} kilograms = ${massAns.toFixed(2)} pounds | ${massAns.toFixed(2)} pounds = ${number} kilograms`;
  length.textContent = ans;
  volume.textContent = anslT;
  mass.textContent = ansM;
});
darkConvertButton.addEventListener("click", function () {
  let number = dInputNumber.value;
  let lengthAns = number * 3.281;
  let litresAns = number * 0.264;
  let massAns = number * 2.204;
  let ans = `${number} meters = ${lengthAns.toFixed(2)} feet | ${lengthAns.toFixed(2)} feet = ${number} meters `;
  let anslT = `${number} litres = ${litresAns.toFixed(2)} gallons | ${litresAns.toFixed(2)} gallons = ${number} litres`;
  let ansM = `${number} kilograms = ${massAns.toFixed(2)} pounds | ${massAns.toFixed(2)} pounds = ${number} kilograms`;
  dLength.textContent = ans;
  dVolume.textContent = anslT;
  dMass.textContent = ansM;
});
