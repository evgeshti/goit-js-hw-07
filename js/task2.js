// Задание 2

// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listItemPotatoesRef = document.createElement('li');
listItemPotatoesRef.textContent = 'Картошка';
listItemPotatoesRef.classList.add('list-item__name');

console.log(listItemPotatoesRef);

const listItemMushroomsRef = document.createElement('li');
listItemMushroomsRef.textContent = 'Грибы';
listItemMushroomsRef.classList.add('list-item__name');

console.log(listItemMushroomsRef);

const listItemGarlicRef = document.createElement('li');
listItemGarlicRef.textContent = 'Чеснок';
listItemGarlicRef.classList.add('list-item__name');

console.log(listItemGarlicRef);

const listItemTomatoRef = document.createElement('li');
listItemTomatoRef.textContent = 'Помидоры';
listItemTomatoRef.classList.add('list-item__name');

console.log(listItemTomatoRef);

const listItemGreenRef = document.createElement('li');
listItemGreenRef.textContent = 'Зелень';
listItemGreenRef.classList.add('list-item__name');

console.log(listItemGreenRef);

const listItemCondimentsRef = document.createElement('li');
listItemCondimentsRef.textContent = 'Приправы';
listItemCondimentsRef.classList.add('list-item__name');

console.log(listItemCondimentsRef);

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(
  listItemPotatoesRef,
  listItemMushroomsRef,
  listItemGarlicRef,
  listItemTomatoRef,
  listItemGreenRef,
  listItemCondimentsRef,
);

console.log(ingredientsListRef);
