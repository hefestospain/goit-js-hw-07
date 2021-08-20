//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const valueElem = document.querySelector("#value");
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');



increment.addEventListener("click", () => {
    console.log(counterValue +=1);
    valueElem.textContent = counterValue;
});

decrement.addEventListener("click", () => {
    console.log(counterValue -= 1);
    valueElem.textContent = counterValue;
});