/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const inputData = document.getElementById("input-number")


function convert(number){ // Retunrs object with converted data and input value
    inputData.innerText = ""
    return {
        length: (number*3.281).toFixed(3),
        volume: (number*0.264).toFixed(3),
        mass: (number*2.204).toFixed(3),
        input: number,
    }
}
function render(object){
    document.getElementById("length")
        .querySelector("supporting-text").textContent = 
            `${object.input} meters = ${object.length} feet | 
                ${object.length} feet = 6.${object.input} meters`

    document.getElementById("volume")
        .querySelector("supporting-text").textContent = 
            `${object.input} meters = ${object.volume} feet | 
                ${object.volume} feet = 6.${object.input} meters`
    
    document.getElementById("mass")
        .querySelector("supporting-text").textContent = 
            `${object.input} meters = ${object.mass} feet | 
                ${object.mass} feet = 6.${object.input} meters`
}