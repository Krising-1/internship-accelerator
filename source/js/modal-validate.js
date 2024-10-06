const modalWindow = document.querySelector('.modal');
const modalWrapper = modalWindow.querySelector('.modal__wrapper');
const modalCloseButton = modalWindow.querySelector('.modal__button-close');
const form = modalWindow.querySelector('.modal__form');
const submitButton = form.querySelector('.modal__button-submit');
const requiredInputs = form.querySelectorAll('.modal__validate-element');
const selectCity = form.querySelector('.modal__validate-element--city');
const phoneInput = form.querySelector('.modal__validate-element--phone');
const modalOpenButton = document.querySelector('.about__button-modal');

const closeModal = (evt) => {
  if (!modalWrapper.contains(evt.target)) {
    modalWindow.classList.remove('modal--open');
    document.removeEventListener('click', closeModal);
  }
};

modalCloseButton.addEventListener('click', () => {
  modalWindow.classList.remove('modal--open');
  document.removeEventListener('click', closeModal);
});

const openModal = () => {
  modalOpenButton.addEventListener('click', () => {
    modalWindow.classList.add('modal--open');
    setTimeout(
      () => {
        document.addEventListener('click', closeModal);
      },
      200
    );
  });
};

const validName = /^[^\s][a-z а-яё]{0,30}[^\s]$/i;
const validNumber = /^\+?[0-9]{11}$/;


const removeErrorMessage = (formElement) => {
  formElement.classList.remove('modal__validate-element--error');
};

const addInputsListener = () => {
  requiredInputs.forEach((element) => {
    element.addEventListener('input', () => {
      removeErrorMessage(element);
    });
  });

  selectCity.addEventListener('mousedown', () => {
    removeErrorMessage(selectCity);
  });

  phoneInput.addEventListener('focus', () => {
    if (phoneInput.value === '') {
      phoneInput.value = '+7';
    }
  });
};

const formCustomValidate = (array) => {
  let error = 0;

  array.forEach((element) => {
    removeErrorMessage(element);
  });

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    // Валидация Имени
    if (element.classList.contains('modal__validate-element--name')) {
      if (!validName.test(element.value)) {
        element.classList.add('modal__validate-element--error');
        error++;
      }
    }

    // Валидация Телефона
    if (element.classList.contains('modal__validate-element--phone')) {
      if (!validNumber.test(element.value)) {
        element.classList.add('modal__validate-element--error');
        error++;
      }
    }

    // Валидация Города
    if (element.classList.contains('modal__validate-element--city')) {
      if (element.value === '') {
        element.classList.add('modal__validate-element--error');
        error++;
      }
    }

    // Валидация чекбокса
    if (element.classList.contains('modal__validate-element--data')) {
      if (!element.checked) {
        element.classList.add('modal__validate-element--error');
        error++;
      }
    }
  }
  return error;
};

const initForm = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (formCustomValidate(requiredInputs) > 0) {
      return;
    }


    submitButton.disabled = true;
    fetch('https://echo.htmlacademy.ru', { method: 'POST', body: new FormData(form) })
      .then((response) => {
        if (response.ok) {
          form.reset();
        } else {
          throw new Error('Не удалось отправить форму. Попробуйте ещё раз!');
        }
      })
      .catch(() => {
        throw new Error('Не удалось отправить форму. Попробуйте ещё раз!');
      })
      .finally(() => {
        submitButton.disabled = false;
        modalWindow.classList.remove('modal--open');
        document.removeEventListener('click', closeModal);
      });
  });
};

const addCustomFormValidate = () => {
  submitButton.addEventListener('click', ()=> {
    formCustomValidate(requiredInputs);
  });
};

const addFormValidate = () => {
  addCustomFormValidate();
  addInputsListener();
  initForm();
};

export { openModal, addFormValidate };
