const foodBtn = document.querySelector('.btn-food');
const drinksBtn = document.querySelector('.btn-drinks');
const menu1 = document.getElementById('food1');
const menu2 = document.getElementById('food2');
const drinks1 = document.getElementById('drinks1');
const drinks2 = document.getElementById('drinks2');

const makeDrinksVisible = () => {
  drinksBtn.addEventListener('click', () => {
    menu1.classList.toggle('passive');
    menu2.classList.toggle('passive');
    drinks1.classList.remove('passive');
    drinks2.classList.remove('passive');
    drinksBtn.disabled = true;
    foodBtn.disabled = false;
    drinksBtn.classList.toggle('active');
    foodBtn.classList.remove('active');
  });
};

const backToFood = () => {
  foodBtn.addEventListener('click', () => {
    menu1.classList.remove('passive');
    menu2.classList.remove('passive');
    drinks1.classList.toggle('passive');
    drinks2.classList.toggle('passive');
    foodBtn.disabled = true;
    drinksBtn.disabled = false;
    drinksBtn.classList.remove('active');
    foodBtn.classList.toggle('active');
  });
};

export { makeDrinksVisible, backToFood };
