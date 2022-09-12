const boxesRef = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('[data-destroy]');
console.log(destroyBtn);
const inputRef = document.querySelector('input[type="number"]');
console.log(inputRef);

function createBoxes() {
  const markupRef = [];

  for (let i = 1; i <= inputRef.value; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement('div');
    item.style.backgroundColor = color;
    item.style.width = `${i * 10 + 30}px`;
    item.style.height = `${i * 10 + 30}px`;
    markupRef.push(item);
  }
  boxesRef.append(...markupRef);
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
