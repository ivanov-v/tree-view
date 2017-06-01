import model from './model';
import { treeTempl } from './view/tree';

function render(tree = model.state) {
  const app = document.querySelector('#app');
  app.innerHTML = treeTempl(tree);
  updateListeners();
}

render();

document.addEventListener('click', (event) => {
  const { target } = event;

  if (target.className !== 'node__button') {
    return;
  }

  const action = target.getAttribute('data-action');
  const id = parseInt(target.closest('.node').getAttribute('data-id'), 10);

  if (action == 'remove') {
    model.removeNode(id);
  } else if (action == 'add') {
    model.addNode(id);
  }

  render(model.state);
});

function updateListeners() {
  [...document.querySelectorAll('.node__input')].forEach(input => {
    input.addEventListener('input', event => {
      const { target } = event;
      const nodeElem = target.closest('.node');
      const id = parseInt(nodeElem.getAttribute('data-id'));

      model.renameNode(id, target.value);
    });
  });
}
