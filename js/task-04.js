let counterValue = 0;
const btnIncrement = document.querySelector('[data-action="increment"]');
console.log(btnIncrement);
const btnDecrement = document.querySelector('[data-action="decrement"]');
console.log(btnDecrement);
const valueEL = document.querySelector('#value');

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  valueEL.textContent = counterValue;
});

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  valueEL.textContent = counterValue;
});
