const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
spanRef.style.fontSize = `${inputRef.value}px`;
inputRef.addEventListener('input', event => {
  spanRef.style.fontSize = event.currentTarget.value + 'px';
});
