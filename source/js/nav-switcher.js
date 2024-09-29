const header = document.querySelector('.body__header');
const button = header.querySelector('.header__nav-button');
const buttonList = header.querySelectorAll('.header__nav-item-button');
const nav = header.querySelector('.header__nav');
const body = document.querySelector('.body');

const closeNav = (evt) => {
  if (!nav.contains(evt.target) && !button.contains(evt.target)) {
    header.classList.remove('header--button-active');
    body.classList.remove('body--darker');
  }
};

const addSwitcherBurger = () => {
  button.addEventListener('click', () => {
    if (header.classList.contains('header--button-active')) {
      header.classList.remove('header--button-active');
      document.removeEventListener('click', closeNav);
      body.classList.remove('body--darker');
    } else {
      header.classList.add('header--button-active');
      document.addEventListener('click', closeNav);
      body.classList.add('body--darker');
    }
  });
};

const listMenuOpener = () => {
  buttonList.forEach((element) => {
    element.addEventListener('click', () => {
      const listInner = element.parentElement.parentElement;

      if (listInner.classList.contains('header__nav-item--open')) {
        listInner.classList.remove('header__nav-item--open');
      } else {
        listInner.classList.add('header__nav-item--open');
      }
    });
  });
};

export { addSwitcherBurger, listMenuOpener };

