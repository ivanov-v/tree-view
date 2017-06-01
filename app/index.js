import Model from './model';
import { treeTempl } from './view/tree';

let model = new Model(getLocalTree());

render();

document.addEventListener('click', (event) => {
  const { target } = event;

  if (target.className !== 'node__button') {
    return;
  }

  const action = target.getAttribute('data-action');
  const id = parseInt(target.closest('.node').getAttribute('data-id'), 10);

  if (action === 'remove') {
    model.removeNode(id);
  } else if (action === 'add') {
    model.addNode(id);
  }

  render(model.state);
  saveLocalTree(model.state);
});

function updateListeners() {
  [...document.querySelectorAll('.node__input')].forEach(input => {
    input.addEventListener('input', event => {
      const { target } = event;
      const nodeElem = target.closest('.node');
      const id = parseInt(nodeElem.getAttribute('data-id'), 10);

      model.renameNode(id, target.value);
      saveLocalTree(model.state);
    });
  });
}

function getLocalTree() {
  const savedTree = localStorage.getItem('tree');
  return savedTree ? JSON.parse(savedTree) : undefined;
}

function saveLocalTree(tree) {
  const savedTree = JSON.stringify(tree);
  localStorage.setItem('tree', savedTree);
}

function render(tree = model.state) {
  const app = document.querySelector('#app');
  app.innerHTML = treeTempl(tree);
  updateListeners();
}
