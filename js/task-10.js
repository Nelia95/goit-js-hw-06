const boxesRef = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('[data-destroy]');
console.log(destroyBtn);
const inputRef = document.querySelector('input[type="number"]');
console.log(inputRef);

inputRef.addEventListener('input', event => {
  console.log(event.currentTarget.value);
  return event.currentTarget.value;
});
const markupRef = [];

function createBoxes() {
  for (let i = 1; i <= inputRef.value; i += 1) {
    const markup = `<div style="background-color: ${getRandomHexColor()}; width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px"></div>`;
    markupRef.push(markup);
    // console.log(markup);
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function destroyBoxes() {
  boxesRef.innerHTML = '';
  inputRef.value = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
boxesRef.innerHTML = markupRef.join('');
console.log(markupRef);
