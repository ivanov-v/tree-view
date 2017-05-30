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
      branch: []
    }
  ],
  root: true
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
