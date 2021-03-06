export function getNewNodeId(tree) {
  const nodes = [];

  forEachTree(tree, (node) => {
    nodes.push(node.id);
  });

  return Math.max(...nodes) + 1;
}

export function forEachTree(tree, callback) {
  (function each(currentNode) {
    currentNode.branch.forEach(node => each(node));
    callback(currentNode);
  })(tree);
}

export function addNode(tree, parentId) {
  const nodeId = getNewNodeId(tree);
  const newNode = {
    id: nodeId,
    name: `element-${nodeId}`,
    branch: []
  };

  if (parentId === tree.id) {
    tree.branch.push(newNode);
  } else {
    const target = findNode(tree, parentId);
    target.branch.push(newNode);
  }

  return tree;
}

export function removeNode(tree, id) {
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

  return tree;
}

export function renameNode(tree, id, name) {
  if (id === tree.id) {
    tree.name = name;
  } else {
    const target = findNode(tree, id);
    target.name = name;
  }

  return tree;
}

export function findNode(tree, id) {
  let target;

  forEachTree(tree, (node) => {
    if (node.id === id) {
      target = node;
    }
  });

  if (target === undefined) {
    throw new Error('Node not found');
  }

  return target;
}
