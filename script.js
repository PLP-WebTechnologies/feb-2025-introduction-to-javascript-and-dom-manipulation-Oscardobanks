const dynamicText = document.getElementById('dynamicText');
const changeTextButton = document.getElementById('changeText');
const addRemoveButton = document.getElementById('addRemove');
const myElement = document.getElementById('myElement');

changeTextButton.addEventListener('click', () => {
  // Change text content
  dynamicText.textContent = 'Text has been changed!';

  // Modify CSS styles
  dynamicText.style.color = 'blue';
  dynamicText.style.fontSize = '20px';
});

addRemoveButton.addEventListener('click', () => {
  // Add or remove the element
  if (myElement.classList.contains('hidden')) {
    myElement.classList.remove('hidden');
    addRemoveButton.textContent = 'Remove Element';
  } else {
    myElement.classList.add('hidden');
    addRemoveButton.textContent = 'Add Element';
  }
});
