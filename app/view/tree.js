export function treeTempl(tree) {
  return `
    <ul>
      ${itemTempl(tree)}
    </ul>
  `;
}

export function itemTempl({ name, branch }) {
  return `
    <li>
      <b>${name}</b>
      ${branch ? branchTempl(branch) : ''}
    </li>
  `;
}

export function branchTempl(items) {
  return `
    <ul>
      ${items.map(item => itemTempl(item)).join('')}
    </ul>
  `;
}
