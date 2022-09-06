const nameInput = document.querySelector('#name-input');
console.log(nameInput);
const nameOutput = document.querySelector('#name-output');
console.log(nameOutput);
nameInput.addEventListener('input', event => {
  nameOutput.textContent = event.currentTarget.value || 'Anonymous';
});
