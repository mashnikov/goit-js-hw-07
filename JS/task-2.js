const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const createIngredientsList = ingredientsArr => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = ingredientsArr;
    return ingredientsItem;
};

const ingredientsList = ingredients.map(ingredientsArr =>
    createIngredientsList(ingredientsArr),
);

ingredientsRef.append(...ingredientsList);
