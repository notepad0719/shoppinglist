const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__btn');
const items = document.querySelector('.items');
const list = document.querySelector('.list');

let ID = 0;

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'itemRow');
  itemRow.setAttribute('data-id', `${ID}`);

  itemRow.innerHTML = `<div class="item">
                          <span class="item__name">${text}</span>
                          <div class="delBtn">
                           <i class="far fa-trash-alt" data-id=${ID}></i>
                          </div>
                        </div>
                        <div class="divider"></div>`;
  ID++;
  return itemRow;
}

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  //2. items > itemRow 만든다
  const item = createItem(text);
  items.appendChild(item);

  item.scrollIntoView({ block: 'center' });

  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  const toBeDeleted = document.querySelector(`li[data-id="${id}"]`);
  if (id) {
    items.removeChild(toBeDeleted);
  }
});
