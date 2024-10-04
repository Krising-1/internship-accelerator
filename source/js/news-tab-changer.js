const buttons = document.querySelectorAll('.news__tab-button');

const tabChanger = () => {
  buttons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      if (!evt.target.classList.contains('news__tab-button--active')) {
        buttons.forEach((element) => {
          element.classList.remove('news__tab-button--active');
        });

        evt.target.classList.add('news__tab-button--active');
      }
    });
  });
};

export { tabChanger };
