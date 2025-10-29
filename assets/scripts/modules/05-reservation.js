const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone-number');
const emailInput = document.getElementById('email');
const dateInput = document.getElementById('date');
const hourInput = document.getElementById('time-hour');
const minuteInput = document.getElementById('time-minutes');
const form = document.querySelector('form');

const nameChecker = () => {
  nameInput.addEventListener('input', (event) => {
    if (
      nameInput.value.match(
        /^\s*(?:[\p{L}.'-]{2,})(?:\s+[\p{L}.'-]{2,})+\s*$/u
      ) != null
    ) {
      nameInput.setCustomValidity('');
    } else {
      nameInput.setCustomValidity('Kérlek teljes nevet adj meg');
    }
  });
};

const phoneChecker = () => {
  phoneInput.addEventListener('input', (event) => {
    if (phoneInput.value.match(/^\+?\d{1,15}$/) != null) {
      phoneInput.setCustomValidity('');
    } else {
      phoneInput.setCustomValidity(
        'Kérlek 06 vagy +36 formátumot használj és csak számokat adj meg'
      );
    }
  });
};

const emailChecker = () => {
  emailInput.addEventListener('input', (event) => {
    if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity('Kérlek megfelelő e-mail címet adj meg');
    } else {
      emailInput.setCustomValidity('');
    }
  });
};

const dateLimiter = () => {
  const currentDate = new Date();
  let formattedCurrentDate = currentDate
    .toLocaleDateString('hu')
    .slice(0, -1)
    .replaceAll('. ', '-');
  dateInput.min = formattedCurrentDate;
  let maxYear = +formattedCurrentDate.slice(0, 4) + 1;
  let maxDate = `${maxYear}${formattedCurrentDate.slice(4)}`;
  dateInput.max = maxDate;
};

const timeSetter = () => {
  for (let i = 10; i < 22; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerText = i;
    hourInput.appendChild(option);
  }
  for (let i = 0; i < 4; i++) {
    const option = document.createElement('option');
    if (i === 0) {
      option.innerText = `00`;
    } else {
      option.innerText = i * 15;
    }
    option.setAttribute('value', i);
    minuteInput.appendChild(option);
  }
};

const submit = () => {
  form.addEventListener('submit', () => {
    alert(
      'Köszönjük a foglalást! Hamarosan visszaigazolást küldünk e-mailben.'
    );
  });
};

export {
  nameChecker,
  phoneChecker,
  emailChecker,
  dateLimiter,
  timeSetter,
  submit,
};
