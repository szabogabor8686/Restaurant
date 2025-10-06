const navbar = document.querySelector('.hamburger');

const menuPoints = document.querySelector('.menu-points');

const addActiveClass = () => {
  navbar.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuPoints.classList.toggle('active');
  });
};

export { addActiveClass };
