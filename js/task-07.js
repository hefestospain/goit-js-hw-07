//Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
//и изменяет инлайн-стиль span#text обновляя свойство font-size.
//В результате при перетаскивании ползунка будет меняться размер текста.

let fontSizeInput = document.querySelector("#font-size-control")
const textChange = document.querySelector("#text")

fontSizeInput.addEventListener('input',changeSize)

function changeSize(event) {
    const fontSizeE = fontSizeInput.value;
    console.log(fontSizeE)

    textChange.style.fontSize = fontSizeInput.value+'px'
}