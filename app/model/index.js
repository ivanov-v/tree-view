const initialState = {
  name: 'tree',
  branch: [
    {
      name: 'tree2',
      branch: [
        {
          name: 'tree2'
        },
        {
          name: 'tree3',
          branch: [
            {
              name: 'tree2',
              branch: [
                {
                  name: 'tree1'
                },
                {
                  name: 'tree2'
                },
                {
                  name: 'tree3'
                }
              ]
            },
            {
              name: 'tree3'
            }
          ]
        }
      ]
    },
    {
      name: 'tree3'
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
}

export default new Model();
