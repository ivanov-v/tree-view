const initialState = {
  id: 1,
  name: 'element 1',
  branch: []
};

class Model {
  constructor(state = initialState) {
    this._state = state;
  }

  get state() {
    return this._state;
  }
}

export default new Model();
