export function tree(tree) {
  return `
    <ul>
      ${item(tree)}
    </ul>
  `;
}

export function item({ name, branch }) {
  return `
    <li>
      <b>${name}</b>
      ${}
    </li>
  `;
}
