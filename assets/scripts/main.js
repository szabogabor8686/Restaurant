import { addActiveClass } from './modules/01-navbar.js';
import { getMenu, getDrinks } from './modules/03-menu-data.js';
import { makeDrinksVisible, backToFood } from './modules/03-menu-actions.js';

addActiveClass();
getMenu();
getDrinks();
makeDrinksVisible();
backToFood();
