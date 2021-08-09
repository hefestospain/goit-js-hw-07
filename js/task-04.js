//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
const valueElem = document.querySelector("#value");

console.log(valueElem.textContent);
console.log(increment)
console.log(typeof counterValue)

increment.addEventListener("click", () => {
    valueElem.textContent = counterValue;
    console.log(counterValue +=1);
});

decrement.addEventListener("click", () => {
    valueElem.textContent = counterValue;
    console.log(counterValue -= 1);
});