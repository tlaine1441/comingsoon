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
    // Move List Item Up
    if (event.target.className == 'up-btn') {
      let li = event.target.parentNode;
      // Checks of there is an previous siblings in the collection (hint. 0 based)
      // Assigns if there is a previous sibling to prevLi if there is.
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      // If prevLi contains a value
      if (prevLi){
        // Inserts the target element before the target 
        // by selecting the previous siblings index and insterting the target before that index value
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == 'down-btn') {
      let li = event.target.parentNode;
      // Checks of there is siblings after the currrent target in the collection
      // Assigns if there is a sibling after the current target
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      // If there is a sibling after current target
      if (nextLi){
        // Inserts the next sibling before the target element
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

