//Напиши скрипт, который бы при потере фокуса на инпуте,
//проверял его содержимое на правильное количество символов.

const textEl = document.querySelector("#validation-input")
textEl.addEventListener('blur',fValid)

console.log(textEl)

function fValid (event) {
    console.log(event.currentTarget.value.length)
    console.log(textEl.dataset.length)
    if (event.currentTarget.value.length === Number(textEl.dataset.length)) {
        textEl.classList.remove("invalid")
        textEl.classList.add("valid")
        
    }
    else {
        textEl.classList.add("invalid")
        textEl.classList.remove("valid")
    }
}