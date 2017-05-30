export function treeTempl(tree) {
  return `
    <ul class="tree">${ nodeTempl(tree) }</ul>
  `;
}

export function nodeTempl({ id, name, branch }) {
  return `
    <li class="node">
      <div class="node__inner">
        <input class="node__input" type="text" value=${ name }>
        <div class="node__buttons">
          <button class="node__button" data-id="${ id }">remove -</button>
          <button class="node__button" data-id="${ id }">add +</button>
        </div>
      </div>
      ${ branch && branch.length ? branchTempl(branch) : '' }
    </li>
  `;
}

export function branchTempl(items) {
  return `
    <ul class="branch">
      ${ items.map(item => nodeTempl(item)).join('') }
    </ul>
  `;
}
