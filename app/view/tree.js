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
