import { getNewNodeId, addNode, removeNode, renameNode } from './index';

test('Should return a new unique id', () => {
  expect(getNewNodeId({
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

test('Should add a new node and return tree', () => {
  expect(addNode({
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

test('Should remove the node and return tree', () => {
  expect(removeNode({
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
    id: 1,
    name: 'element-1',
    branch: []
  });
});

test('Should rename the node and return tree', () => {
  expect(renameNode({
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
