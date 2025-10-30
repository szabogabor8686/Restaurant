const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 1;
let intervalID;
let timer;

function showSlides(n) {
  slideIndex = n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let j = 0; j < dots.length; j++) {
    dots[j].classList.remove('active');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

function restartSlideshow(delay = 3000) {
  clearTimeout(timer);
  clearInterval(intervalID);
  timer = setTimeout(() => {
    intervalID = setInterval(() => {
      slideIndex++;
      showSlides(slideIndex);
    }, 3000);
  }, delay);
}

const prevSlide = () => {
  prevBtn.addEventListener('click', () => {
    showSlides(slideIndex - 1);
    restartSlideshow();
  });
};

const nextSlide = () => {
  nextBtn.addEventListener('click', () => {
    showSlides(slideIndex + 1);
    restartSlideshow();
  });
};

const dotControl = () => {
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
      showSlides(i + 1);
      restartSlideshow();
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
  intervalID = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000);
});

export { prevSlide, nextSlide, dotControl };
