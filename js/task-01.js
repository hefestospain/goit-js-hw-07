// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item
const listCategories = document.querySelectorAll(".item");
console.log(`В списке ${listCategories.length} категории`);

//Для каждого элемента li.item в списке ul#categories, найдет 
//и выведет в консоль текст заголовка элемента (тега h2) 
//и количество элементов в категории (всех вложенных в него элементов li)
console.log(listCategories);
for (const catg of listCategories) {
    console.log(`Категория:${catg.firstElementChild.textContent}`);
    console.log(`Количество элементов:${catg.firstElementChild.nextElementSibling.children.length}`);
}