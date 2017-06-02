export default class View {
  constructor(state) {
    this.data = state;
  }

  getMarkup() {
    return treeTempl(this.data);
  }

  set onClick(handler) {
    this._onClick = handler;
  }

  set onInput(handler) {
    this._onInput = handler;
  }

  bindButtonsListener() {
    document.addEventListener('click', (event) => {
      const { target } = event;

      if (target.className !== 'node__button') {
        return;
      }

      const action = target.getAttribute('data-action');
      const id = parseInt(target.closest('.node').getAttribute('data-id'), 10);

      this._onClick({
        action,
        id
      });
    });
  }

  bindInputsListener() {
    [...document.querySelectorAll('.node__input')].forEach(input => {
      input.addEventListener('input', event => {
        const { target } = event;
        const value = target.value;
        const nodeElem = target.closest('.node');
        const id = parseInt(nodeElem.getAttribute('data-id'), 10);

        this._onInput({
          value,
          id
        });
      });
    });
  }
}

function treeTempl(tree) {
  return `<ul class="tree">${ nodeTempl(tree) }</ul>`;
}

function nodeTempl({ id, name, branch }) {
  return `
    <li class="node" data-id="${ id }">
      <div class="node__inner">
        <input class="node__input" type="text" value=${ name }>
        <div class="node__buttons">
          ${ buttonTempl('remove', 'remove -') }
          ${ buttonTempl('add', 'add +') }
        </div>
      </div>
      ${ branch && branch.length ? branchTempl(branch) : '' }
    </li>
  `;
}

function branchTempl(items) {
  return `
    <ul class="branch">
      ${ items.map(item => nodeTempl(item)).join('') }
    </ul>
  `;
}

function buttonTempl(action, text) {
  return `<button class="node__button" data-action="${ action }">${ text }</button>`;
}
