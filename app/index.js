import model from './model';
import { treeTempl } from './view/tree';

function render(tree = model.state) {
  const app = document.querySelector('#app');
  app.innerHTML = treeTempl(tree);
}

render();

const state = {
  root: true,
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
        },
        {
          id: 4,
          name: 'element-4',
          branch: []
        }
      ]
    },
    {
      id: 5,
      name: 'element-5',
      branch: [
        {
          id: 6,
          name: 'element-6',
          branch: []
        }
      ]
    }
  ]
};

document.addEventListener('click', (event) => {
  const { target } = event;

  if (target.className !== 'node__button') {
    return;
  }

  const action = target.getAttribute('data-action');
  const id = parseInt(target.parentNode.getAttribute('data-id'), 10);

  if (action == 'remove') {
    removeNode(state, id);
  } else if (action == 'add') {
    addNode(state, id);
  }

  render(state);
});

class Node {
  constructor(id) {
    this.id = id;
    this.name = 'element-' + id;
    this.branch = [];
  }
}

function getNewNodeId(tree) {
  const nodes = [];

  forEachTree(tree, (node) => {
    nodes.push(node.id);
  });

  return Math.max(...nodes) + 1;
}

function forEachTree(tree, callback) {
  (function each(currentNode) {
    currentNode.branch.forEach(node => each(node));
    callback(currentNode);
  })(tree);
}

function addNode(tree, parentId) {
  const nodeId = getNewNodeId(tree);
  const newNode = new Node(nodeId);

  if (parentId === tree.id) {
    tree.branch.push(newNode);
  } else {
    forEachTree(tree, (node) => {
      if (node.id === parentId) {
        node.branch.push(newNode);
      }
    });
  }
}

function removeNode(tree, id) {
  const queue = [tree];

  while(queue.length) {
    const node = queue.shift();

    for (let i = 0; i < node.branch.length; i++) {
      if (node.branch[i].id === id) {
        node.branch.splice(i, 1);
      } else {
        queue.push(node.branch[i]);
      }
    }
  }
}
