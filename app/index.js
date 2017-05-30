import model from './model';
import { treeTempl } from './view/tree';

function render() {
  const app = document.querySelector('#app');
  app.innerHTML = treeTempl(model.state);
}

render();

class Node {
  constructor(id) {
    this.id = id;
    this.name = 'element-' + id;
    this.nodes = [];
  }
}

const initialState = {
  id: 1,
  name: 'element-1',
  branch: [
    {
      id: 2,
      name: 'element-2',
      branch: [
        {
          id: 3,
          name: 'element-3',
          branch: []
        }
      ]
    },
    {
      id: 4,
      name: 'element-4',
      branch: [
        {
          id: 5,
          name: 'element-5',
          branch: []
        }
      ]
    }
  ],
  root: true
};

function getFlat(state) {
  const flat = [state];

}

function eachNodes(node, callback) {
  (function each(node){
    callback(node);
    node.branch.forEach(node => {
      each(node);
    });
  })(node);
}

eachNodes(initialState, (node) => {
  console.log(node);
});

function addNode(state, id) {
  const node = new Node(id);

  if (id === state.id) {
    state.branch.push(node);
  }

  console.log(state);
}
