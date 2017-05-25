import model from './model';
import { treeTempl } from './view/tree';

function render() {
  const app = document.querySelector('#app');
  app.innerHTML = treeTempl(model.state);
}

render();
