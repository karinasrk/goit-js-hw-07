// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputFontSizeControl = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');
inputFontSizeControl.addEventListener('input', onInputFontSizeControl);

function onInputFontSizeControl(event) {
  inputText.style.fontSize = `${event.currentTarget.value}px`;
}
