// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

const createIngredientsList = products => {
  return products.map(product => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = product;

    return listItemEl;
  });
};

const elements = createIngredientsList(ingredients);
ingredientsListEl.append(...elements);
