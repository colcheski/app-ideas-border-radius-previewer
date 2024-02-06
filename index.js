const topLeftInput = document.getElementById('topLeft');
const topRightInput = document.getElementById('topRight');
const bottomLeftInput = document.getElementById('bottomLeft');
const bottomRightInput = document.getElementById('bottomRight');
const box = document.getElementById('cornersBox');

// topLeftInput.addEventListener('input', () => {
//   console.log(topLeftInput.value);
// });

console.log(getComputedStyle(box).borderTopLeftRadius);

topLeftInput.value = parseFloat(getComputedStyle(box).borderTopLeftRadius);
topRightInput.value = parseFloat(getComputedStyle(box).borderTopRightRadius);
bottomLeftInput.value = parseFloat(getComputedStyle(box).borderBottomLeftRadius);
bottomRightInput.value = parseFloat(getComputedStyle(box).borderBottomRightRadius);

