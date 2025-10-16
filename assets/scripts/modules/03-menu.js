function renderMenu(data) {
  const menu1 = document.getElementById('food1');
  const menu2 = document.getElementById('food2');
  let row1 = '';
  let row2 = '';
  const firstPart = data.slice(0, 10);
  const secondPart = data.slice(20);
  firstPart.forEach((element) => {
    let randomPrice = Math.floor(Math.random() * (100 - 10) + 10) * 100;
    row1 += `<tr><td>${element.name}</td><td>${randomPrice} Ft</td></tr>`;
  });
  secondPart.forEach((element) => {
    let randomPrice = Math.floor(Math.random() * (100 - 10) + 10) * 100;
    row2 += `<tr><td>${element.name}</td><td>${randomPrice} Ft</td></tr>`;
  });
  menu1.innerHTML = row1;
  menu2.innerHTML = row2;
}

async function getMenu() {
  try {
    const response = await fetch('https://dummyjson.com/recipes?limit=28');
    const parsedResponse = await response.json();
    renderMenu(parsedResponse.recipes);
  } catch (e) {
    alert('Elnézést kérünk, az étlap jelenleg nem elérhető');
  }
}

function renderDrinks(data) {
  const drinks1 = document.getElementById('drinks1');
  const drinks2 = document.getElementById('drinks2');
  let row1 = '';
  let row2 = '';
  const firstPart = data.slice(0, 10);
  const secondPart = data.slice(10);
  firstPart.forEach((element) => {
    let randomPrice = Math.floor(Math.random() * (150 - 60) + 60) * 10;
    row1 += `<tr><td>${element.strIngredient1}</td><td>${randomPrice} Ft</td></tr>`;
  });
  secondPart.forEach((element) => {
    let randomPrice = Math.floor(Math.random() * (150 - 60) + 60) * 10;
    row2 += `<tr><td>${element.strIngredient1}</td><td>${randomPrice} Ft</td></tr>`;
  });
  drinks1.innerHTML = row1;
  drinks2.innerHTML = row2;
}

async function getDrinks() {
  try {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z'
    );
    const parsedResponse = await response.json();
    renderDrinks(parsedResponse.drinks);
  } catch (e) {
    alert('Elnézést kérünk, az itallap jelenleg nem elérhető');
  }
}

export { getMenu, getDrinks };
