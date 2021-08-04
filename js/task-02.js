const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  //Cкрипт, который для каждого элемента массива ingredients создаст отдельный li, 
  //после чего вставит все li за одну операцию в список ul.ingredients. 
  //Для создания DOM-узлов используй document.createElement().

  const listIngredients = document.querySelector("#ingredients");

  for (const ingr of ingredients) {
    //console.log(ingr);
    let li = document.createElement("li");
    li.textContent = ingr;

    listIngredients.appendChild(li);
  }