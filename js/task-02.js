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
  console.log(listIngredients)

  const makeListPro = (ingredients) => {
    return ingredients.map(ingr => {
      const listElem = document.createElement('li');
      listElem.textContent = ingr;
      return listElem;
    })
  }  
  const listProducts = makeListPro(ingredients);
  listIngredients.append(...listProducts)
