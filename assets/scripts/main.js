import { addActiveClass, removeActiveClass } from './modules/01-navbar.js';
import { getMenu, getDrinks } from './modules/03-menu-data.js';
import { makeDrinksVisible, backToFood } from './modules/03-menu-actions.js';
import { prevSlide, nextSlide, dotControl } from './modules/04-galery.js';
import {
  nameChecker,
  phoneChecker,
  emailChecker,
  dateLimiter,
  timeSetter,
  submit,
} from './modules/05-reservation.js';

addActiveClass();
removeActiveClass();
getMenu();
getDrinks();
makeDrinksVisible();
backToFood();
prevSlide();
nextSlide();
dotControl();
nameChecker();
phoneChecker();
emailChecker();
dateLimiter();
timeSetter();
submit();
