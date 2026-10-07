let count = 0;

const button = document.getElementById('countButton');
const countText = document.getElementById('countText');

button.addEventListener('click', () => {
  count += 1;
  countText.textContent = `Button clicked ${count} time${count === 1 ? '' : 's'}.`;
});
