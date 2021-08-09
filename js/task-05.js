//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//подставляет его текущее значение в span#name-output. 
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

let nameInput = document.querySelector("#name-input")
let nameOutput = document.querySelector("#name-output")

console.log(nameInput.textContent)
console.log(nameOutput.textContent)

function changeName (event) {
     event.currentTarget.value? nameOutput.textContent = event.currentTarget.value :
nameOutput.textContent = "незнакомец";
}


nameInput.addEventListener("input", changeName)