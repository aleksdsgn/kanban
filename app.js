const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
  // когда перетаскиваемый элемент находится над плейсхолдером
  placeholder.addEventListener('dragover', dragover)
  // когда мы заходим на территорию плейсхолдера
  placeholder.addEventListener('dragenter', dragenter)
  // когда перетащили и вышли с территории плейсхолдера
  placeholder.addEventListener('dragleave', dragleave)
  // когда мы отпустили
  placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
  // удалить следующие классы или... 
  // event.target.classList.remove('hold', 'hide');
  // перетереть все классы и добавить только один
  event.target.className = 'item';
}

// когда перетаскиваемый элемент находится над плейсхолдером
function dragover(event) {
  event.preventDefault();
  // console.log('drag over');
}

// когда мы заходим на территорию плейсхолдера
function dragenter(event) {
  event.target.classList.add('hovered');
  console.log('drag enter');
}

// когда перетащили и вышли с территории плейсхолдера
function dragleave(event) {
  event.target.classList.remove('hovered');
}

// когда мы отпустили
function dragdrop(event) {
  event.target.classList.remove('hovered');
  event.target.append(item);
}