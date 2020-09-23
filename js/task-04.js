// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div >

const counter = {
  value: 0,
  onIncrementBtnClick() {
    this.value += 1;
  },
  onDecrementBtnClick() {
    this.value -= 1;
  },
};

const counterValue = document.querySelector('#value');

const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);

incrementBtn.addEventListener('click', function () {
  console.log('Кликнули на инкремент');

  counter.onIncrementBtnClick();
  counterValue.textContent = counter.value;
});

decrementBtn.addEventListener('click', function () {
  console.log('Кликнули на декремент');

  counter.onDecrementBtnClick();
  counterValue.textContent = counter.value;
});
