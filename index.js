/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const converBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

converBtn.addEventListener("click", function(){
    const value = Number(inputEl.value)
    const feet = Math.round((3.281 * value) * 1000) / 1000
    const meter = Math.round((value / 3.281) * 1000) / 1000
    const gallons = Math.round((0.264 * value) * 1000) / 1000
    const liters = Math.round((value / 0.264) * 1000) / 1000
    const pounds = Math.round((2.204 * value) * 1000) / 1000
    const kilos = Math.round((value / 2.204) * 1000) / 1000
    lengthEl.innerHTML = `${value} meter = ${feet} feet | ${value} feet = ${meter} meters`
    volumeEl.innerHTML = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters `
    massEl.innerHTML = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`
    
    
})