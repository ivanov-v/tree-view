import model from './model';
import { treeTempl } from './view/tree';

function render() {
  const app = document.querySelector('#app');
  app.innerHTML = treeTempl(model.state);
}

render();

let obj = { a: 1, b: 2 };

console.log({ ...obj, b: 3 });
