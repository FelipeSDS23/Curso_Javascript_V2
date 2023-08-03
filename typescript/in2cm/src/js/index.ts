const inches = document.getElementById("inches") as HTMLInputElement
const centim = document.getElementById("centim") as HTMLInputElement

type FnListener = (this: HTMLInputElement, e: Event) => void

// function convertToCm(e) : FnListener {
//     console.log(this.value)
// }

const convertToCm: FnListener = function(e){
    console.log(this.value)
    centim.value = (calculateCm(parseFloat(this.value))).toString()
}

inches.addEventListener("input", convertToCm)

function calculateCm(inche : number): number {
    return inche * 2.54
}


const convertToIn: FnListener = function(e){
    inches.value = calculateInche(parseFloat(this.value)).toString()
}

centim.addEventListener("input", convertToIn)

function calculateInche(cm : number): number {
    return cm * 0.393700787
}