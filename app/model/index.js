import { addNode, removeNode, renameNode } from './methods/methods';

const initialState = {
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
};

class Model {
  constructor(state = initialState) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  addNode(id) {
    addNode(this._state, id);
  }

  removeNode(id) {
    removeNode(this._state, id);
  }

  renameNode(id, name) {
    renameNode(this._state, id, name);
  }
}

export default new Model();
