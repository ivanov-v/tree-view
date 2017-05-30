export function treeTempl(tree) {
  return `
    <ul class="tree">${ nodeTempl(tree) }</ul>
  `;
}

export function nodeTempl({ name, branch }) {
  return `
    <li class="node">
      <div class="node__inner">
        <input class="node__input" type="text" value=${ name }>
        <div class="node__buttons">
          <button class="node__button">remove -</button>
          <button class="node__button">add +</button>
        </div>
      </div>
      ${ branch ? branchTempl(branch) : '' }
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
