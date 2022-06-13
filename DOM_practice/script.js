// GET ELEMENT BY ID****
// let headerElement = document.getElementById('header');
// console.log(header.textContent);
// headerElement.textContent = 'To-Do Apps';
// headerElement.innerText = 'To-Do Apps';
// headerElement.innerHTML = 'To-Do Apps';
// headerElement.style.color = 'red';

// GET ELEMENT BY CLASS*******
// let itemUL = document.getElementById('items');
// let classElement = itemUL.getElementsByClassName('item');
// let items = classElement;

// for (let i = 0; i < items.length; i++) {
//   items[i].style.color = 'red';
// }

// GET ELEMENT BY TAGS*****
// let tagsItem = document.getElementsByTagName('h2');
// console.log(tagsItem);

// QUERY SELECTOR****
// let header = document.querySelector('.header');
// let newTask = document.querySelector('#new-task');

// let lastItem = document.querySelector('.item:last-child');

// let lastItemsAll = document.querySelectorAll('.item:last-child');

// let nthNumberItem = document.querySelector('.item:nth-child(2)');

// nthNumberItem.style.color = 'blue';

// for (const element of lastItemsAll) {
//   element.style.color = 'red';
// }

// let items = document
//   .querySelector('#items')
//   .querySelector('.item:nth-child(3)');
// items.style.color = 'pink';
// console.log(lastItem, lastItemsAll);

// Parent Child Relation**************
// const grandParent = document.querySelector('.todo-list');
// // const parent = document.querySelector('#items');
// const parent = grandParent.children;
// // const children = parent.children;
// // const children = parent[1].children;
// const children = grandParent.querySelectorAll('.item');

// console.log(children);

// child to parent****
// const children = document.querySelector('.item');
// // const parent = children.parentElement;
// // closest going from bottom to top
// const grandParent = children.closest('.todo-list');
// console.log(grandParent);

// sibling node 1 to 2
// const childrenOne = document.querySelector('.item');
// const childrenTwo = childrenOne.nextElementSibling;
// childrenTwo.style.color = 'red';
// console.log(childrenTwo);

// sibling node 2 to 1
// const childrenTwo = document.querySelector('.item').nextElementSibling;
// const childrenOne = childrenTwo.previousElementSibling;
// childrenOne.style.color = 'red';
// console.log(childrenOne);

// Creating an element
// const divElement = document.createElement('div');

// divElement.className = 'red';

// divElement.setAttribute('id', 'red');
// divElement.setAttribute('title', 'Red div');

// const container = document.querySelector('.todo-list');
// const h2 = container.querySelector('h2');
// divElement.innerHTML = 'Red div';
// // container.insertBefore(divElement, h2);
// // container.appendChild(divElement);
// container.append(divElement);
