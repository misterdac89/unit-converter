const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet= 3.28084
const literToGallon = 0.264172
const kilogramToPound = 2.20462

convertBtn.addEventListener("click", function() {
   
   let baseLine = inputEl.value
   lengthEl.innerHTML = `<p>${baseLine} meters = ${(baseLine* meterToFeet).toFixed(3)} feet</p>`
   volumeEl.innerHTML = `<p>${baseLine} liters = ${(baseLine* literToGallon).toFixed(3)} gallons</p>`
   massEl.innerHTML = `<p>${baseLine} kilograms = ${(baseLine* kilogramToPound).toFixed(3)} pounds</p>`
   
   inputEl.value = "<input type = 'number' placeholder = '0'>"
})