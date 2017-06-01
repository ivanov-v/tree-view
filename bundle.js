/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _methods = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var initialState = {
  id: 1,
  name: 'element-1',
  branch: [{
    id: 2,
    name: 'element-2',
    branch: []
  }]
};

var Model = function () {
  function Model() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

    _classCallCheck(this, Model);

    this._state = state;
  }

  _createClass(Model, [{
    key: 'addNode',
    value: function addNode(id) {
      (0, _methods.addNode)(this._state, id);
    }
  }, {
    key: 'removeNode',
    value: function removeNode(id) {
      (0, _methods.removeNode)(this._state, id);
    }
  }, {
    key: 'renameNode',
    value: function renameNode(id, name) {
      (0, _methods.renameNode)(this._state, id, name);
    }
  }, {
    key: 'state',
    get: function get() {
      return this._state;
    }
  }]);

  return Model;
}();

exports.default = Model;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treeTempl = treeTempl;
function treeTempl(tree) {
  return '<ul class="tree">' + nodeTempl(tree) + '</ul>';
}

function nodeTempl(_ref) {
  var id = _ref.id,
      name = _ref.name,
      branch = _ref.branch;

  return '\n    <li class="node" data-id="' + id + '">\n      <div class="node__inner">\n        <input class="node__input" type="text" value=' + name + '>\n        <div class="node__buttons">\n          ' + buttonTempl('remove', 'remove -') + '\n          ' + buttonTempl('add', 'add +') + '\n        </div>\n      </div>\n      ' + (branch && branch.length ? branchTempl(branch) : '') + '\n    </li>\n  ';
}

function branchTempl(items) {
  return '\n    <ul class="branch">\n      ' + items.map(function (item) {
    return nodeTempl(item);
  }).join('') + '\n    </ul>\n  ';
}

function buttonTempl(action, text) {
  return '<button class="node__button" data-action="' + action + '">' + text + '</button>';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _model = __webpack_require__(0);

var _model2 = _interopRequireDefault(_model);

var _tree = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var model = new _model2.default(getLocalTree());

render();

document.addEventListener('click', function (event) {
  var target = event.target;


  if (target.className !== 'node__button') {
    return;
  }

  var action = target.getAttribute('data-action');
  var id = parseInt(target.closest('.node').getAttribute('data-id'), 10);

  if (action == 'remove') {
    model.removeNode(id);
  } else if (action == 'add') {
    model.addNode(id);
  }

  render(model.state);
  saveLocalTree(model.state);
});

function updateListeners() {
  [].concat(_toConsumableArray(document.querySelectorAll('.node__input'))).forEach(function (input) {
    input.addEventListener('input', function (event) {
      var target = event.target;

      var nodeElem = target.closest('.node');
      var id = parseInt(nodeElem.getAttribute('data-id'), 10);

      model.renameNode(id, target.value);
      saveLocalTree(model.state);
    });
  });
}

function getLocalTree() {
  var savedTree = localStorage.getItem('tree');
  return savedTree ? JSON.parse(savedTree) : undefined;
}

function saveLocalTree(tree) {
  var savedTree = JSON.stringify(tree);
  localStorage.setItem('tree', savedTree);
}

function render() {
  var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : model.state;

  var app = document.querySelector('#app');
  app.innerHTML = (0, _tree.treeTempl)(tree);
  updateListeners();
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewNodeId = getNewNodeId;
exports.forEachTree = forEachTree;
exports.addNode = addNode;
exports.removeNode = removeNode;
exports.renameNode = renameNode;
function getNewNodeId(tree) {
  var nodes = [];

  forEachTree(tree, function (node) {
    nodes.push(node.id);
  });

  return Math.max.apply(Math, nodes) + 1;
}

function forEachTree(tree, callback) {
  (function each(currentNode) {
    currentNode.branch.forEach(function (node) {
      return each(node);
    });
    callback(currentNode);
  })(tree);
}

function addNode(tree, parentId) {
  var nodeId = getNewNodeId(tree);
  var newNode = {
    id: nodeId,
    name: "element-" + nodeId,
    branch: []
  };

  if (parentId === tree.id) {
    tree.branch.push(newNode);
  } else {
    forEachTree(tree, function (node) {
      if (node.id === parentId) {
        node.branch.push(newNode);
      }
    });
  }

  return tree;
}

function removeNode(tree, id) {
  var queue = [tree];

  while (queue.length) {
    var node = queue.shift();

    for (var i = 0; i < node.branch.length; i++) {
      if (node.branch[i].id === id) {
        node.branch.splice(i, 1);
      } else {
        queue.push(node.branch[i]);
      }
    }
  }

  return tree;
}

function renameNode(tree, id, name) {
  if (id === tree.id) {
    tree.name = name;
  } else {
    forEachTree(tree, function (node) {
      if (node.id === id) {
        node.name = name;
      }
    });
  }

  return tree;
}

/***/ })
/******/ ]);