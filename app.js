const item = document.querySelector('.item');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
  // console.log('dragstart', event.target);
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
  // console.log('dragend');
  // удалить следующие классы или... 
  // event.target.classList.remove('hold', 'hide');
  // перетереть все классы и добавить только один
  event.target.className = 'item';
}
