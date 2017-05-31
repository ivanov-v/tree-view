export function treeTempl(tree) {
  return `<ul class="tree">${ nodeTempl(tree) }</ul>`;
}

function nodeTempl({ id, name, branch, root }) {
  return `
    <li class="node" data-id="${ id }">
      <div class="node__inner">
        <input class="node__input" type="text" value=${ name }>
        <div class="node__buttons">
          ${ root ? '' : buttonTempl('remove', 'remove -') }
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
