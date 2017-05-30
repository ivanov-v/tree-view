import model from './model';
import { treeTempl } from './view/tree';

function render(state = model.state) {
  const app = document.querySelector('#app');
  app.innerHTML = treeTempl(state);
}

render();

class Node {
  constructor(id) {
    this.id = id;
    this.name = 'element-' + id;
    this.branch = [];
  }
}

const initialState = {
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

function getNewNodeId(state) {
  const nodes = [];

  forEachTree(state, (node) => {
    nodes.push(node.id);
  });

  return Math.max(...nodes) + 1;
}

function forEachTree(node, callback) {
  (function each(currentNode) {
    currentNode.branch.forEach(node => each(node));
    callback(currentNode);
  })(node);
}

// function addNode(state, parentId) {
//   const nodeId = getNewNodeId(state);
//   const newNode = new Node(nodeId);
//
//   if (parentId === state.id) {
//     state.branch.push(node);
//   } else {
//     forEachTree(state, (node) => {
//       if (node.id === parentId) {
//         node.branch.push(newNode);
//       }
//     });
//   }
//
//   console.log(state);
// }

function addNode(tree, parentId) {
  const nodeId = getNewNodeId(state);
  const newNode = new Node(nodeId);
  let newTree;

  if (parentId === tree.id) {
    newTree = {
      ...tree,
      branch: [...tree.branch, node]
    };
  } else {
    forEachTree(tree, (node) => {
      if (node.id === parentId) {
        node.branch.push(newNode);

      }
    });
  }

  return newTree;
  console.log(state);
}

addNode(initialState, 4);


render(initialState);
