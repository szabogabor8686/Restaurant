const navbar = document.querySelector('.hamburger');
const menuPoints = document.querySelector('.menu-points');
const navLinks = document.querySelectorAll('.nav-link');

const addActiveClass = () => {
  navbar.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuPoints.classList.toggle('active');
  });
};

const removeActiveClass = () => {
  navLinks.forEach((a) => {
    a.addEventListener('click', () => {
      navbar.classList.remove('active');
      menuPoints.classList.remove('active');
    });
  });
};

export { addActiveClass, removeActiveClass };
