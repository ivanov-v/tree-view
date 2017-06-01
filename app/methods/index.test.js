import { getNewNodeId, addNode, removeNode, renameNode } from './index';

test('Must return a new unique id', () => {
  expect(getNewNodeId({
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
      }
    ]
  })).toBe(5);
});

test('Must add a new node and return tree', () => {
  expect(addNode({
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
          }
        ]
      }
    ]
  }, 2)).toEqual({
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
      }
    ]
  });
});

test('Must remove the node and return tree', () => {
  expect(removeNode({
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
          }
        ]
      }
    ]
  }, 2)).toEqual({
    root: true,
    id: 1,
    name: 'element-1',
    branch: []
  });
});

test('Must rename the node and return tree', () => {
  expect(renameNode({
    root: true,
    id: 1,
    name: 'element-1',
    branch: [
      {
        id: 2,
        name: 'element-2',
        branch: []
      }
    ]
  }, 1, 'new node name')).toEqual({
    root: true,
    id: 1,
    name: 'new node name',
    branch: [
      {
        id: 2,
        name: 'element-2',
        branch: []
      }
    ]
  });
});
