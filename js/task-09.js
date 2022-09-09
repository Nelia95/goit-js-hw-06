const changeBtn = document.querySelector('.change-color');
console.log(changeBtn);
const spanRef = document.querySelector('.color');
console.log(spanRef);
const bodyRef = document.querySelector('body');
console.log(bodyRef);

const changeRandomColor = () => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  spanRef.textContent = randomColor;
  console.log(spanRef.textContent);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeBtn.addEventListener('click', changeRandomColor);
