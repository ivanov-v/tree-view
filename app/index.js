import model from './model';
import { tree } from './view/tree';

function render() {
  const app = document.querySelector('#app');
  app.innerHTML = tree(model.state);
}

render();
