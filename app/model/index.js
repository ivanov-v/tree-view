const initialState = {
  name: 'tree'
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
