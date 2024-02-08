const topLeftInput = document.getElementById('topLeft');
const topLeftError = document.getElementById('topLeftError');
const topRightInput = document.getElementById('topRight');
const topRightError = document.getElementById('topRightError');
const bottomLeftInput = document.getElementById('bottomLeft');
const bottomLeftError = document.getElementById('bottomLeftError');
const bottomRightInput = document.getElementById('bottomRight');
const bottomRightError = document.getElementById('bottomRightError');
const inputs = [
  {
    inputElement: topLeftInput, 
    errorTextElement: topLeftError
  }, 
  {
    inputElement: topRightInput, 
    errorTextElement: topRightError
  }, 
  {
    inputElement: bottomLeftInput, 
    errorTextElement: bottomLeftError
  }, 
  {
    inputElement: bottomRightInput,
    errorTextElement: bottomRightError
  }
];
const box = document.getElementById('cornersBox');

function validateInput(input, errorElement) {
  if (isNaN(input.value)) {
    input.classList.add('is-danger');
    errorElement.classList.remove('is-hidden')
  } else {
    input.classList.remove('is-danger');
    errorElement.classList.add('is-hidden')
  }
}

function updateBorderRadius(borderRadiusName, value) {
  const style = box.style;
  const pixelValue = value + 'px';
  switch (borderRadiusName) {
    case 'top-left':
      style.borderTopLeftRadius = pixelValue;
      break;
    case 'top-right':
      style.borderTopRightRadius = pixelValue;
      break;
    case 'bottom-left':
      style.borderBottomLeftRadius = pixelValue;
      break;
    case 'bottom-right':
      style.borderBottomRightRadius = pixelValue;
      break;
    default:
      break;
  }
  
}

for (const input of inputs) {
  input.inputElement.addEventListener('input', (event) => {
    validateInput(input.inputElement, input.errorTextElement);
    updateBorderRadius(event.target.name, input.inputElement.value);
  })
}

