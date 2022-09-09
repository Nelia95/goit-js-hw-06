const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

const onInputFocus = event => {
  console.log('focus');
  console.log(event.target);
  event.target.classList.add('focus');
};
inputRef.addEventListener('focus', onInputFocus);

const inputBlur = event => {
  const { dataset, value } = event.target;
  const requireLength = Number(dataset.length);
  console.log(requireLength);
  console.log(value.length);
  if (requireLength === value.length) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
};
inputRef.addEventListener('blur', inputBlur);
