/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const inputData = document.getElementById("input-number")


function _convert(number){ // Returns object with converted data and input value
    number = Number(number)
    return {
        feets: (number*3.281).toFixed(3),
        gallons: (number*0.264).toFixed(3),
        pounds: (number*2.204).toFixed(3),
        meters: (number/3.281).toFixed(3),
        liers:  (number/0.264).toFixed(3),
        kilograms: (number/2.204).toFixed(3),
        input: number,
    }
}
function _render(object){ // Puts data in supporting text
    document.getElementById("length")
        .querySelector(".supporting-text").textContent = 
            `${object.input} meters = ${object.feets} feet | 
                ${object.input} feet = ${object.meters} meters`

    document.getElementById("volume")
        .querySelector(".supporting-text").textContent = 
            `${object.input} liters = ${object.gallons} gallons | 
                ${object.input} gallons = ${object.liters} liters`
    
    document.getElementById("mass")
        .querySelector(".supporting-text").textContent = 
            `${object.input} kilos = ${object.mass} pounds | 
                ${object.input} kilos = ${object.pounds} pounds`
}
function covertBtnProcess(){ // Function thatmust be called after button clicked
    if (!inputData.value){
        return
    }
    const obj = _convert(inputData.value)
    inputData.value = ""
    _render(obj)

}