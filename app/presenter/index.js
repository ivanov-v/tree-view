import Model from '../model';
import View from '../view';

export default class Presenter {
  constructor() {
    this.root = document.querySelector('#app');
  }

  init() {
    this.model = new Model(this.getLocalTree());
    this.initView();
  }

  initView() {
    this.view = new View(this.model.state);
    this.view.onClick = this.nodeButtons.bind(this);
    this.view.onInput = this.nodeInputs.bind(this);
    this.render();
    this.view.bindButtonsListener();
  }

  nodeButtons({ action, id }) {
    if (action === 'remove') {
      this.model.removeNode(id);
    } else if (action === 'add') {
      this.model.addNode(id);
    }

    this.render();
    this.saveLocalTree(this.model.state);
  }

  nodeInputs({ value, id }) {
    this.model.renameNode(id, value);
    this.saveLocalTree(this.model.state);
  }

  render() {
    this.root.innerHTML = this.view.getMarkup();
    this.view.bindInputsListener();
  }

  getLocalTree() {
    const savedTree = localStorage.getItem('tree');
    return savedTree ? JSON.parse(savedTree) : undefined;
  }

  saveLocalTree(tree) {
    const savedTree = JSON.stringify(tree);
    localStorage.setItem('tree', savedTree);
  }
}
