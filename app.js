const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptipnButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

// Remove List Item Button Functionality
listUl.addEventListener('click', () => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove-list-item-btn') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up-btn') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi){
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == 'down-btn') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi){
        ul.insertBefore(nextLi, li);
      }
    }
   }
});

// Hide or Show List Button (TOGGLE LIST)
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  }
  else {
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  }
});

// Change Description Button
descriptipnButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});
  
  
// Add Item Button  
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.className = 'list-item';
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

