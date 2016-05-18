webpackJsonp([0],{

/***/ 0:
/*!********************!*\
  !*** ./app/App.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 33);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 168);
	
	var _KanbanBoardContainer = __webpack_require__(/*! ./components/KanbanBoardContainer */ 231);
	
	var _KanbanBoardContainer2 = _interopRequireDefault(_KanbanBoardContainer);
	
	var _KanbanBoard = __webpack_require__(/*! ./components/KanbanBoard */ 250);
	
	var _KanbanBoard2 = _interopRequireDefault(_KanbanBoard);
	
	var _EditCard = __webpack_require__(/*! ./components/EditCard */ 786);
	
	var _EditCard2 = _interopRequireDefault(_EditCard);
	
	var _NewCard = __webpack_require__(/*! ./components/NewCard */ 789);
	
	var _NewCard2 = _interopRequireDefault(_NewCard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { component: _KanbanBoardContainer2.default },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _KanbanBoard2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: 'new', component: _NewCard2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'edit/:card_id', component: _EditCard2.default })
	    )
	  )
	), document.getElementById('root'));

/***/ },

/***/ 231:
/*!************************************************!*\
  !*** ./app/components/KanbanBoardContainer.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(/*! flux/utils */ 232);
	
	var _KanbanBoard = __webpack_require__(/*! ./KanbanBoard */ 250);
	
	var _KanbanBoard2 = _interopRequireDefault(_KanbanBoard);
	
	var _CardActionCreators = __webpack_require__(/*! ../actions/CardActionCreators */ 781);
	
	var _CardActionCreators2 = _interopRequireDefault(_CardActionCreators);
	
	var _CardStore = __webpack_require__(/*! ../stores/CardStore */ 783);
	
	var _CardStore2 = _interopRequireDefault(_CardStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KanbanBoardContainer = function (_Component) {
	  _inherits(KanbanBoardContainer, _Component);
	
	  function KanbanBoardContainer() {
	    _classCallCheck(this, KanbanBoardContainer);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(KanbanBoardContainer).apply(this, arguments));
	  }
	
	  _createClass(KanbanBoardContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _CardActionCreators2.default.fetchCards();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var kanbanBoard = this.props.children && _react2.default.cloneElement(this.props.children, {
	        cards: this.state.cards
	      });
	
	      return kanbanBoard;
	    }
	  }]);
	
	  return KanbanBoardContainer;
	}(_react.Component);
	
	KanbanBoardContainer.getStores = function () {
	  return [_CardStore2.default];
	};
	KanbanBoardContainer.calculateState = function (prevState) {
	  return {
	    cards: _CardStore2.default.getState()
	  };
	};
	
	exports.default = _utils.Container.create(KanbanBoardContainer);

/***/ },

/***/ 232:
/*!*************************!*\
  !*** ./~/flux/utils.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	module.exports.Container = __webpack_require__(/*! ./lib/FluxContainer */ 233);
	module.exports.MapStore = __webpack_require__(/*! ./lib/FluxMapStore */ 237);
	module.exports.Mixin = __webpack_require__(/*! ./lib/FluxMixinLegacy */ 249);
	module.exports.ReduceStore = __webpack_require__(/*! ./lib/FluxReduceStore */ 238);
	module.exports.Store = __webpack_require__(/*! ./lib/FluxStore */ 239);


/***/ },

/***/ 233:
/*!*************************************!*\
  !*** ./~/flux/lib/FluxContainer.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxContainer
	 * 
	 */
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FluxStoreGroup = __webpack_require__(/*! ./FluxStoreGroup */ 234);
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 235);
	var shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ 236);
	
	var DEFAULT_OPTIONS = {
	  pure: true,
	  withProps: false
	};
	
	/**
	 * A FluxContainer is used to subscribe a react component to multiple stores.
	 * The stores that are used must be returned from a static `getStores()` method.
	 *
	 * The component receives information from the stores via state. The state
	 * is generated using a static `calculateState()` method that each container
	 * must implement. A simple container may look like:
	 */
	function create(Base, options) {
	  enforceInterface(Base);
	
	  // Construct the options using default, override with user values as necessary
	  var realOptions = _extends({}, DEFAULT_OPTIONS, options || {});
	
	  var FluxContainerClass = (function (_Base) {
	    _inherits(FluxContainerClass, _Base);
	
	    function FluxContainerClass(props) {
	      _classCallCheck(this, FluxContainerClass);
	
	      _Base.call(this, props);
	      this.state = realOptions.withProps ? Base.calculateState(null, props) : Base.calculateState(null, undefined);
	    }
	
	    // Make sure we override shouldComponentUpdate only if the pure option is
	    // specified. We can't override this above because we don't want to override
	    // the default behavior on accident. Super works weird with react ES6 classes
	    // right now
	
	    FluxContainerClass.prototype.componentDidMount = function componentDidMount() {
	      var _this = this;
	
	      if (_Base.prototype.componentDidMount) {
	        _Base.prototype.componentDidMount.call(this);
	      }
	
	      var stores = Base.getStores();
	
	      // This tracks when any store has changed and we may need to update.
	      var changed = false;
	      var setChanged = function () {
	        changed = true;
	      };
	
	      // This adds subscriptions to stores. When a store changes all we do is
	      // set changed to true.
	      this._fluxContainerSubscriptions = stores.map(function (store) {
	        return store.addListener(setChanged);
	      });
	
	      // This callback is called after the dispatch of the relevant stores. If
	      // any have reported a change we update the state, then reset changed.
	      var callback = function () {
	        if (changed) {
	          _this.setState(function (prevState) {
	            return realOptions.withProps ? Base.calculateState(prevState, _this.props) : Base.calculateState(prevState, undefined);
	          });
	        }
	        changed = false;
	      };
	      this._fluxContainerStoreGroup = new FluxStoreGroup(stores, callback);
	    };
	
	    FluxContainerClass.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
	      if (_Base.prototype.componentWillReceiveProps) {
	        _Base.prototype.componentWillReceiveProps.call(this, nextProps, nextContext);
	      }
	
	      // Don't do anything else if the container is not configured to use props
	      if (!realOptions.withProps) {
	        return;
	      }
	
	      // If it's pure we can potentially optimize out the calculate state
	      if (realOptions.pure && shallowEqual(this.props, nextProps)) {
	        return;
	      }
	
	      // Finally update the state using the new props
	      this.setState(function (prevState) {
	        return Base.calculateState(prevState, nextProps);
	      });
	    };
	
	    FluxContainerClass.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (_Base.prototype.componentWillUnmount) {
	        _Base.prototype.componentWillUnmount.call(this);
	      }
	
	      this._fluxContainerStoreGroup.release();
	      for (var _iterator = this._fluxContainerSubscriptions, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref;
	
	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }
	
	        var subscription = _ref;
	
	        subscription.remove();
	      }
	      this._fluxContainerSubscriptions = [];
	    };
	
	    return FluxContainerClass;
	  })(Base);
	
	  var container = realOptions.pure ? createPureContainer(FluxContainerClass) : FluxContainerClass;
	
	  // Update the name of the container before returning
	  var componentName = Base.displayName || Base.name;
	  container.displayName = 'FluxContainer(' + componentName + ')';
	
	  return container;
	}
	
	// TODO: typecheck this better
	function createPureContainer(FluxContainerBase) {
	  var PureFluxContainerClass = (function (_FluxContainerBase) {
	    _inherits(PureFluxContainerClass, _FluxContainerBase);
	
	    function PureFluxContainerClass() {
	      _classCallCheck(this, PureFluxContainerClass);
	
	      _FluxContainerBase.apply(this, arguments);
	    }
	
	    PureFluxContainerClass.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	    };
	
	    return PureFluxContainerClass;
	  })(FluxContainerBase);
	
	  return PureFluxContainerClass;
	}
	
	function enforceInterface(o) {
	  !o.getStores ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Components that use FluxContainer must implement `static getStores()`') : invariant(false) : undefined;
	  !o.calculateState ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Components that use FluxContainer must implement `static calculateState()`') : invariant(false) : undefined;
	}
	
	module.exports = { create: create };
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },

/***/ 234:
/*!**************************************!*\
  !*** ./~/flux/lib/FluxStoreGroup.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxStoreGroup
	 * 
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 235);
	
	/**
	 * FluxStoreGroup allows you to execute a callback on every dispatch after
	 * waiting for each of the given stores.
	 */
	
	var FluxStoreGroup = (function () {
	  function FluxStoreGroup(stores, callback) {
	    var _this = this;
	
	    _classCallCheck(this, FluxStoreGroup);
	
	    this._dispatcher = _getUniformDispatcher(stores);
	
	    // precompute store tokens
	    var storeTokens = stores.map(function (store) {
	      return store.getDispatchToken();
	    });
	
	    // register with the dispatcher
	    this._dispatchToken = this._dispatcher.register(function (payload) {
	      _this._dispatcher.waitFor(storeTokens);
	      callback();
	    });
	  }
	
	  FluxStoreGroup.prototype.release = function release() {
	    this._dispatcher.unregister(this._dispatchToken);
	  };
	
	  return FluxStoreGroup;
	})();
	
	function _getUniformDispatcher(stores) {
	  !(stores && stores.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Must provide at least one store to FluxStoreGroup') : invariant(false) : undefined;
	  var dispatcher = stores[0].getDispatcher();
	  if (process.env.NODE_ENV !== 'production') {
	    for (var _iterator = stores, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;
	
	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }
	
	      var store = _ref;
	
	      !(store.getDispatcher() === dispatcher) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'All stores in a FluxStoreGroup must use the same dispatcher') : invariant(false) : undefined;
	    }
	  }
	  return dispatcher;
	}
	
	module.exports = FluxStoreGroup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },

/***/ 236:
/*!*******************************************!*\
  !*** ./~/flux/~/fbjs/lib/shallowEqual.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },

/***/ 237:
/*!************************************!*\
  !*** ./~/flux/lib/FluxMapStore.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxMapStore
	 * 
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FluxReduceStore = __webpack_require__(/*! ./FluxReduceStore */ 238);
	var Immutable = __webpack_require__(/*! immutable */ 248);
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 235);
	
	/**
	 * This is a simple store. It allows caching key value pairs. An implementation
	 * of a store using this might look like:
	 *
	 *   class FooStore extends FluxMapStore {
	 *     reduce(state, action) {
	 *       switch (action.type) {
	 *         case 'foo':
	 *           return state.set(action.id, action.foo);
	 *         case 'bar':
	 *           return state.delete(action.id);
	 *         default:
	 *           return state;
	 *       }
	 *     }
	 *   }
	 *
	 */
	
	var FluxMapStore = (function (_FluxReduceStore) {
	  _inherits(FluxMapStore, _FluxReduceStore);
	
	  function FluxMapStore() {
	    _classCallCheck(this, FluxMapStore);
	
	    _FluxReduceStore.apply(this, arguments);
	  }
	
	  FluxMapStore.prototype.getInitialState = function getInitialState() {
	    return Immutable.Map();
	  };
	
	  /**
	   * Access the value at the given key. throws an error if the key does not
	   * exist in the cache.
	   */
	
	  FluxMapStore.prototype.at = function at(key) {
	    !this.has(key) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected store to have key %s', key) : invariant(false) : undefined;
	    return this.get(key);
	  };
	
	  /**
	   * Check if the cache has a particular key
	   */
	
	  FluxMapStore.prototype.has = function has(key) {
	    return this.getState().has(key);
	  };
	
	  /**
	   * Get the value of a particular key. Returns undefined if the key does not
	   * exist in the cache.
	   */
	
	  FluxMapStore.prototype.get = function get(key) {
	    return this.getState().get(key);
	  };
	
	  /**
	   * Gets an array of keys and puts the values in a map if they exist, it allows
	   * providing a previous result to update instead of generating a new map.
	   *
	   * Providing a previous result allows the possibility of keeping the same
	   * reference if the keys did not change.
	   */
	
	  FluxMapStore.prototype.getAll = function getAll(keys, prev) {
	    var _this = this;
	
	    var newKeys = Immutable.Set(keys);
	    var start = prev || Immutable.Map();
	    return start.withMutations(function (map) {
	      // remove any old keys that are not in new keys or are no longer in
	      // the cache
	      for (var _iterator = start, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref;
	
	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }
	
	        var entry = _ref;
	        var oldKey = entry[0];
	
	        if (!newKeys.has(oldKey) || !_this.has(oldKey)) {
	          map['delete'](oldKey);
	        }
	      }
	
	      // then add all of the new keys that exist in the cache
	      for (var _iterator2 = newKeys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	        var _ref2;
	
	        if (_isArray2) {
	          if (_i2 >= _iterator2.length) break;
	          _ref2 = _iterator2[_i2++];
	        } else {
	          _i2 = _iterator2.next();
	          if (_i2.done) break;
	          _ref2 = _i2.value;
	        }
	
	        var key = _ref2;
	
	        if (_this.has(key)) {
	          map.set(key, _this.at(key));
	        }
	      }
	    });
	  };
	
	  return FluxMapStore;
	})(FluxReduceStore);
	
	module.exports = FluxMapStore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },

/***/ 238:
/*!***************************************!*\
  !*** ./~/flux/lib/FluxReduceStore.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxReduceStore
	 * 
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FluxStore = __webpack_require__(/*! ./FluxStore */ 239);
	
	var abstractMethod = __webpack_require__(/*! ./abstractMethod */ 247);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 235);
	
	var FluxReduceStore = (function (_FluxStore) {
	  _inherits(FluxReduceStore, _FluxStore);
	
	  function FluxReduceStore(dispatcher) {
	    _classCallCheck(this, FluxReduceStore);
	
	    _FluxStore.call(this, dispatcher);
	    this._state = this.getInitialState();
	  }
	
	  /**
	   * Getter that exposes the entire state of this store. If your state is not
	   * immutable you should override this and not expose _state directly.
	   */
	
	  FluxReduceStore.prototype.getState = function getState() {
	    return this._state;
	  };
	
	  /**
	   * Constructs the initial state for this store. This is called once during
	   * construction of the store.
	   */
	
	  FluxReduceStore.prototype.getInitialState = function getInitialState() {
	    return abstractMethod('FluxReduceStore', 'getInitialState');
	  };
	
	  /**
	   * Used to reduce a stream of actions coming from the dispatcher into a
	   * single state object
	   */
	
	  FluxReduceStore.prototype.reduce = function reduce(state, action) {
	    return abstractMethod('FluxReduceStore', 'reduce');
	  };
	
	  /**
	   * Checks if two versions of state are the same. You do not need to override
	   * this if your state is immutable.
	   */
	
	  FluxReduceStore.prototype.areEqual = function areEqual(one, two) {
	    return one === two;
	  };
	
	  /**
	   * Use reduce and track _state instead of using __onDispatch
	   */
	
	  FluxReduceStore.prototype.__invokeOnDispatch = function __invokeOnDispatch(action) {
	    this.__changed = false;
	
	    // reduce the stream of incoming actions to state, update when necessary
	    var startingState = this._state;
	    var endingState = this.reduce(startingState, action);
	
	    // This means your ending state should never be undefined
	    !(endingState !== undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s returned undefined from reduce(...), did you forget to return ' + 'state in the default case? (use null if this was intentional)', this.constructor.name) : invariant(false) : undefined;
	
	    if (!this.areEqual(startingState, endingState)) {
	      this._state = endingState;
	
	      // `__emitChange()` sets `this.__changed` to true and then the actual
	      // change will be fired from the emitter at the end of the dispatch, this
	      // is required in order to support methods like `hasChanged()`
	      this.__emitChange();
	    }
	
	    if (this.__changed) {
	      this.__emitter.emit(this.__changeEvent);
	    }
	  };
	
	  return FluxReduceStore;
	})(FluxStore);
	
	module.exports = FluxReduceStore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },

/***/ 239:
/*!*********************************!*\
  !*** ./~/flux/lib/FluxStore.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxStore
	 * 
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _require = __webpack_require__(/*! fbemitter */ 240);
	
	var EventEmitter = _require.EventEmitter;
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 235);
	
	/**
	 * This class should be extended by the stores in your application, like so:
	 *
	 * var FluxStore = require('FluxStore');
	 * var MyDispatcher = require('MyDispatcher');
	 *
	 * var _foo;
	 *
	 * class MyStore extends FluxStore {
	 *
	 *   getFoo() {
	 *     return _foo;
	 *   }
	 *
	 *   __onDispatch = function(action) {
	 *     switch(action.type) {
	 *
	 *       case 'an-action':
	 *         changeState(action.someData);
	 *         this.__emitChange();
	 *         break;
	 *
	 *       case 'another-action':
	 *         changeStateAnotherWay(action.otherData);
	 *         this.__emitChange();
	 *         break;
	 *
	 *       default:
	 *         // no op
	 *     }
	 *   }
	 *
	 * }
	 *
	 * module.exports = new MyStore(MyDispatcher);
	 */
	
	var FluxStore = (function () {
	
	  /**
	   * @public
	   * @param {Dispatcher} dispatcher
	   */
	
	  function FluxStore(dispatcher) {
	    var _this = this;
	
	    _classCallCheck(this, FluxStore);
	
	    this.__className = this.constructor.name;
	
	    this.__changed = false;
	    this.__changeEvent = 'change';
	    this.__dispatcher = dispatcher;
	    this.__emitter = new EventEmitter();
	    this._dispatchToken = dispatcher.register(function (payload) {
	      _this.__invokeOnDispatch(payload);
	    });
	  }
	
	  /**
	   * @public
	   * @param {function} callback
	   * @return {object} EmitterSubscription that can be used with
	   *   SubscriptionsHandler or directly used to release the subscription.
	   */
	
	  FluxStore.prototype.addListener = function addListener(callback) {
	    return this.__emitter.addListener(this.__changeEvent, callback);
	  };
	
	  /**
	   * @public
	   * @return {Dispatcher} The dispatcher that this store is registered with.
	   */
	
	  FluxStore.prototype.getDispatcher = function getDispatcher() {
	    return this.__dispatcher;
	  };
	
	  /**
	   * @public
	   * @return {string} A string the dispatcher uses to identify each store's
	   *   registered callback. This is used with the dispatcher's waitFor method
	   *   to declaratively depend on other stores updating themselves first.
	   */
	
	  FluxStore.prototype.getDispatchToken = function getDispatchToken() {
	    return this._dispatchToken;
	  };
	
	  /**
	   * @public
	   * @return {boolean} Whether the store has changed during the most recent
	   *   dispatch.
	   */
	
	  FluxStore.prototype.hasChanged = function hasChanged() {
	    !this.__dispatcher.isDispatching() ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.hasChanged(): Must be invoked while dispatching.', this.__className) : invariant(false) : undefined;
	    return this.__changed;
	  };
	
	  /**
	   * @protected
	   * Emit an event notifying listeners that the state of the store has changed.
	   */
	
	  FluxStore.prototype.__emitChange = function __emitChange() {
	    !this.__dispatcher.isDispatching() ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.__emitChange(): Must be invoked while dispatching.', this.__className) : invariant(false) : undefined;
	    this.__changed = true;
	  };
	
	  /**
	   * This method encapsulates all logic for invoking __onDispatch. It should
	   * be used for things like catching changes and emitting them after the
	   * subclass has handled a payload.
	   *
	   * @protected
	   * @param {object} payload The data dispatched by the dispatcher, describing
	   *   something that has happened in the real world: the user clicked, the
	   *   server responded, time passed, etc.
	   */
	
	  FluxStore.prototype.__invokeOnDispatch = function __invokeOnDispatch(payload) {
	    this.__changed = false;
	    this.__onDispatch(payload);
	    if (this.__changed) {
	      this.__emitter.emit(this.__changeEvent);
	    }
	  };
	
	  /**
	   * The callback that will be registered with the dispatcher during
	   * instantiation. Subclasses must override this method. This callback is the
	   * only way the store receives new data.
	   *
	   * @protected
	   * @override
	   * @param {object} payload The data dispatched by the dispatcher, describing
	   *   something that has happened in the real world: the user clicked, the
	   *   server responded, time passed, etc.
	   */
	
	  FluxStore.prototype.__onDispatch = function __onDispatch(payload) {
	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s has not overridden FluxStore.__onDispatch(), which is required', this.__className) : invariant(false) : undefined;
	  };
	
	  return FluxStore;
	})();
	
	module.exports = FluxStore;
	
	// private
	
	// protected, available to subclasses
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },

/***/ 240:
/*!*************************************!*\
  !*** ./~/flux/~/fbemitter/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	var fbemitter = {
	  EventEmitter: __webpack_require__(/*! ./lib/BaseEventEmitter */ 241)
	};
	
	module.exports = fbemitter;


/***/ },

/***/ 241:
/*!****************************************************!*\
  !*** ./~/flux/~/fbemitter/lib/BaseEventEmitter.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BaseEventEmitter
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var EmitterSubscription = __webpack_require__(/*! ./EmitterSubscription */ 242);
	var EventSubscriptionVendor = __webpack_require__(/*! ./EventSubscriptionVendor */ 244);
	
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 246);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 245);
	
	/**
	 * @class BaseEventEmitter
	 * @description
	 * An EventEmitter is responsible for managing a set of listeners and publishing
	 * events to them when it is told that such events happened. In addition to the
	 * data for the given event it also sends a event control object which allows
	 * the listeners/handlers to prevent the default behavior of the given event.
	 *
	 * The emitter is designed to be generic enough to support all the different
	 * contexts in which one might want to emit events. It is a simple multicast
	 * mechanism on top of which extra functionality can be composed. For example, a
	 * more advanced emitter may use an EventHolder and EventFactory.
	 */
	
	var BaseEventEmitter = (function () {
	  /**
	   * @constructor
	   */
	
	  function BaseEventEmitter() {
	    _classCallCheck(this, BaseEventEmitter);
	
	    this._subscriber = new EventSubscriptionVendor();
	    this._currentSubscription = null;
	  }
	
	  /**
	   * Adds a listener to be invoked when events of the specified type are
	   * emitted. An optional calling context may be provided. The data arguments
	   * emitted will be passed to the listener function.
	   *
	   * TODO: Annotate the listener arg's type. This is tricky because listeners
	   *       can be invoked with varargs.
	   *
	   * @param {string} eventType - Name of the event to listen to
	   * @param {function} listener - Function to invoke when the specified event is
	   *   emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  BaseEventEmitter.prototype.addListener = function addListener(eventType, listener, context) {
	    return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));
	  };
	
	  /**
	   * Similar to addListener, except that the listener is removed after it is
	   * invoked once.
	   *
	   * @param {string} eventType - Name of the event to listen to
	   * @param {function} listener - Function to invoke only once when the
	   *   specified event is emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  BaseEventEmitter.prototype.once = function once(eventType, listener, context) {
	    var emitter = this;
	    return this.addListener(eventType, function () {
	      emitter.removeCurrentListener();
	      listener.apply(context, arguments);
	    });
	  };
	
	  /**
	   * Removes all of the registered listeners, including those registered as
	   * listener maps.
	   *
	   * @param {?string} eventType - Optional name of the event whose registered
	   *   listeners to remove
	   */
	
	  BaseEventEmitter.prototype.removeAllListeners = function removeAllListeners(eventType) {
	    this._subscriber.removeAllSubscriptions(eventType);
	  };
	
	  /**
	   * Provides an API that can be called during an eventing cycle to remove the
	   * last listener that was invoked. This allows a developer to provide an event
	   * object that can remove the listener (or listener map) during the
	   * invocation.
	   *
	   * If it is called when not inside of an emitting cycle it will throw.
	   *
	   * @throws {Error} When called not during an eventing cycle
	   *
	   * @example
	   *   var subscription = emitter.addListenerMap({
	   *     someEvent: function(data, event) {
	   *       console.log(data);
	   *       emitter.removeCurrentListener();
	   *     }
	   *   });
	   *
	   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
	   *   emitter.emit('someEvent', 'def'); // does not log anything
	   */
	
	  BaseEventEmitter.prototype.removeCurrentListener = function removeCurrentListener() {
	    !!!this._currentSubscription ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Not in an emitting cycle; there is no current subscription') : invariant(false) : undefined;
	    this._subscriber.removeSubscription(this._currentSubscription);
	  };
	
	  /**
	   * Returns an array of listeners that are currently registered for the given
	   * event.
	   *
	   * @param {string} eventType - Name of the event to query
	   * @return {array}
	   */
	
	  BaseEventEmitter.prototype.listeners = function listeners(eventType) /* TODO: Array<EventSubscription> */{
	    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	    return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
	      return subscription.listener;
	    }) : [];
	  };
	
	  /**
	   * Emits an event of the given type with the given data. All handlers of that
	   * particular type will be notified.
	   *
	   * @param {string} eventType - Name of the event to emit
	   * @param {*} Arbitrary arguments to be passed to each registered listener
	   *
	   * @example
	   *   emitter.addListener('someEvent', function(message) {
	   *     console.log(message);
	   *   });
	   *
	   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
	   */
	
	  BaseEventEmitter.prototype.emit = function emit(eventType) {
	    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	    if (subscriptions) {
	      var keys = Object.keys(subscriptions);
	      for (var ii = 0; ii < keys.length; ii++) {
	        var key = keys[ii];
	        var subscription = subscriptions[key];
	        // The subscription may have been removed during this event loop.
	        if (subscription) {
	          this._currentSubscription = subscription;
	          this.__emitToSubscription.apply(this, [subscription].concat(Array.prototype.slice.call(arguments)));
	        }
	      }
	      this._currentSubscription = null;
	    }
	  };
	
	  /**
	   * Provides a hook to override how the emitter emits an event to a specific
	   * subscription. This allows you to set up logging and error boundaries
	   * specific to your environment.
	   *
	   * @param {EmitterSubscription} subscription
	   * @param {string} eventType
	   * @param {*} Arbitrary arguments to be passed to each registered listener
	   */
	
	  BaseEventEmitter.prototype.__emitToSubscription = function __emitToSubscription(subscription, eventType) {
	    var args = Array.prototype.slice.call(arguments, 2);
	    subscription.listener.apply(subscription.context, args);
	  };
	
	  return BaseEventEmitter;
	})();
	
	module.exports = BaseEventEmitter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },

/***/ 242:
/*!*******************************************************!*\
  !*** ./~/flux/~/fbemitter/lib/EmitterSubscription.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 * 
	 * @providesModule EmitterSubscription
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventSubscription = __webpack_require__(/*! ./EventSubscription */ 243);
	
	/**
	 * EmitterSubscription represents a subscription with listener and context data.
	 */
	
	var EmitterSubscription = (function (_EventSubscription) {
	  _inherits(EmitterSubscription, _EventSubscription);
	
	  /**
	   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
	   *   this subscription
	   * @param {function} listener - Function to invoke when the specified event is
	   *   emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  function EmitterSubscription(subscriber, listener, context) {
	    _classCallCheck(this, EmitterSubscription);
	
	    _EventSubscription.call(this, subscriber);
	    this.listener = listener;
	    this.context = context;
	  }
	
	  return EmitterSubscription;
	})(EventSubscription);
	
	module.exports = EmitterSubscription;

/***/ },

/***/ 243:
/*!*****************************************************!*\
  !*** ./~/flux/~/fbemitter/lib/EventSubscription.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventSubscription
	 * @typechecks
	 */
	
	'use strict';
	
	/**
	 * EventSubscription represents a subscription to a particular event. It can
	 * remove its own subscription.
	 */
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var EventSubscription = (function () {
	
	  /**
	   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
	   *   this subscription.
	   */
	
	  function EventSubscription(subscriber) {
	    _classCallCheck(this, EventSubscription);
	
	    this.subscriber = subscriber;
	  }
	
	  /**
	   * Removes this subscription from the subscriber that controls it.
	   */
	
	  EventSubscription.prototype.remove = function remove() {
	    if (this.subscriber) {
	      this.subscriber.removeSubscription(this);
	      this.subscriber = null;
	    }
	  };
	
	  return EventSubscription;
	})();
	
	module.exports = EventSubscription;

/***/ },

/***/ 244:
/*!***********************************************************!*\
  !*** ./~/flux/~/fbemitter/lib/EventSubscriptionVendor.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 * 
	 * @providesModule EventSubscriptionVendor
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 245);
	
	/**
	 * EventSubscriptionVendor stores a set of EventSubscriptions that are
	 * subscribed to a particular event type.
	 */
	
	var EventSubscriptionVendor = (function () {
	  function EventSubscriptionVendor() {
	    _classCallCheck(this, EventSubscriptionVendor);
	
	    this._subscriptionsForType = {};
	    this._currentSubscription = null;
	  }
	
	  /**
	   * Adds a subscription keyed by an event type.
	   *
	   * @param {string} eventType
	   * @param {EventSubscription} subscription
	   */
	
	  EventSubscriptionVendor.prototype.addSubscription = function addSubscription(eventType, subscription) {
	    !(subscription.subscriber === this) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The subscriber of the subscription is incorrectly set.') : invariant(false) : undefined;
	    if (!this._subscriptionsForType[eventType]) {
	      this._subscriptionsForType[eventType] = [];
	    }
	    var key = this._subscriptionsForType[eventType].length;
	    this._subscriptionsForType[eventType].push(subscription);
	    subscription.eventType = eventType;
	    subscription.key = key;
	    return subscription;
	  };
	
	  /**
	   * Removes a bulk set of the subscriptions.
	   *
	   * @param {?string} eventType - Optional name of the event type whose
	   *   registered supscriptions to remove, if null remove all subscriptions.
	   */
	
	  EventSubscriptionVendor.prototype.removeAllSubscriptions = function removeAllSubscriptions(eventType) {
	    if (eventType === undefined) {
	      this._subscriptionsForType = {};
	    } else {
	      delete this._subscriptionsForType[eventType];
	    }
	  };
	
	  /**
	   * Removes a specific subscription. Instead of calling this function, call
	   * `subscription.remove()` directly.
	   *
	   * @param {object} subscription
	   */
	
	  EventSubscriptionVendor.prototype.removeSubscription = function removeSubscription(subscription) {
	    var eventType = subscription.eventType;
	    var key = subscription.key;
	
	    var subscriptionsForType = this._subscriptionsForType[eventType];
	    if (subscriptionsForType) {
	      delete subscriptionsForType[key];
	    }
	  };
	
	  /**
	   * Returns the array of subscriptions that are currently registered for the
	   * given event type.
	   *
	   * Note: This array can be potentially sparse as subscriptions are deleted
	   * from it when they are removed.
	   *
	   * TODO: This returns a nullable array. wat?
	   *
	   * @param {string} eventType
	   * @return {?array}
	   */
	
	  EventSubscriptionVendor.prototype.getSubscriptionsForType = function getSubscriptionsForType(eventType) {
	    return this._subscriptionsForType[eventType];
	  };
	
	  return EventSubscriptionVendor;
	})();
	
	module.exports = EventSubscriptionVendor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },

/***/ 245:
/*!****************************************************!*\
  !*** ./~/flux/~/fbemitter/~/fbjs/lib/invariant.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },

/***/ 246:
/*!********************************************************!*\
  !*** ./~/flux/~/fbemitter/~/fbjs/lib/emptyFunction.js ***!
  \********************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	"use strict";
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },

/***/ 247:
/*!**************************************!*\
  !*** ./~/flux/lib/abstractMethod.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule abstractMethod
	 * 
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 235);
	
	function abstractMethod(className, methodName) {
	   true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Subclasses of %s must override %s() with their own implementation.', className, methodName) : invariant(false) : undefined;
	}
	
	module.exports = abstractMethod;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },

/***/ 248:
/*!**********************************************!*\
  !*** ./~/flux/~/immutable/dist/immutable.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;
	
	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }
	
	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }
	
	
	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }
	
	
	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }
	
	
	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }
	
	
	
	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }
	
	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }
	
	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }
	
	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }
	
	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }
	
	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;
	
	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;
	
	
	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';
	
	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;
	
	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};
	
	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };
	
	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }
	
	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }
	
	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}
	
	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }
	
	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }
	
	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }
	
	  function returnTrue() {
	    return true;
	  }
	
	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }
	
	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }
	
	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }
	
	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }
	
	  /* global Symbol */
	
	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;
	
	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	
	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
	
	
	  function Iterator(next) {
	      this.next = next;
	    }
	
	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };
	
	
	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;
	
	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };
	
	
	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }
	
	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }
	
	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }
	
	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }
	
	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }
	
	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }
	
	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }
	
	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };
	
	    Seq.prototype.toSeq = function() {
	      return this;
	    };
	
	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };
	
	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };
	
	    // abstract __iterateUncached(fn, reverse)
	
	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };
	
	    // abstract __iteratorUncached(type, reverse)
	
	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };
	
	
	
	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }
	
	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };
	
	
	
	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }
	
	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };
	
	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };
	
	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };
	
	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };
	
	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };
	
	
	
	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }
	
	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };
	
	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };
	
	
	
	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;
	
	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
	
	  Seq.prototype[IS_SEQ_SENTINEL] = true;
	
	
	
	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }
	
	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };
	
	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };
	
	
	
	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }
	
	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };
	
	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };
	
	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };
	
	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }
	
	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };
	
	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };
	
	
	
	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }
	
	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	
	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };
	
	
	
	
	  // # pragma Helper functions
	
	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }
	
	  var EMPTY_SEQ;
	
	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }
	
	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }
	
	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }
	
	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }
	
	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }
	
	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }
	
	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }
	
	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }
	
	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }
	
	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }
	
	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }
	
	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }
	
	    var notAssociative = !isAssociative(a);
	
	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }
	
	    var flipped = false;
	
	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }
	
	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });
	
	    return allEqual && a.size === bSize;
	  }
	
	  createClass(Repeat, IndexedSeq);
	
	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }
	
	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };
	
	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };
	
	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };
	
	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };
	
	    Repeat.prototype.reverse = function() {
	      return this;
	    };
	
	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };
	
	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };
	
	
	  var EMPTY_REPEAT;
	
	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }
	
	  createClass(Range, IndexedSeq);
	
	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }
	
	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };
	
	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };
	
	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };
	
	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };
	
	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };
	
	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };
	
	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };
	
	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };
	
	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };
	
	
	  var EMPTY_RANGE;
	
	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }
	
	
	  createClass(KeyedCollection, Collection);function KeyedCollection() {}
	
	  createClass(IndexedCollection, Collection);function IndexedCollection() {}
	
	  createClass(SetCollection, Collection);function SetCollection() {}
	
	
	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;
	
	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };
	
	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }
	
	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }
	
	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }
	
	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }
	
	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }
	
	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }
	
	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }
	
	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }
	
	    return hash;
	  }
	
	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;
	
	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());
	
	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }
	
	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }
	
	  var objHashUID = 0;
	
	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }
	
	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};
	
	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }
	
	  createClass(Map, KeyedCollection);
	
	    // @pragma Construction
	
	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };
	
	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };
	
	    // @pragma Access
	
	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };
	
	    // @pragma Modification
	
	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };
	
	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };
	
	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };
	
	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };
	
	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };
	
	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };
	
	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };
	
	    // @pragma Composition
	
	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };
	
	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };
	
	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };
	
	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };
	
	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };
	
	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };
	
	    // @pragma Mutability
	
	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };
	
	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };
	
	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };
	
	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };
	
	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };
	
	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };
	
	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };
	
	
	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }
	
	  Map.isMap = isMap;
	
	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
	
	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;
	
	
	  // #pragma Trie Nodes
	
	
	
	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }
	
	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && entries.length === 1) {
	        return; // undefined
	      }
	
	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new ArrayMapNode(ownerID, newEntries);
	    };
	
	
	
	
	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }
	
	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };
	
	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;
	
	      if (!exists && value === NOT_SET) {
	        return this;
	      }
	
	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	
	      if (newNode === node) {
	        return this;
	      }
	
	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }
	
	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }
	
	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };
	
	
	
	
	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }
	
	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };
	
	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];
	
	      if (removed && !node) {
	        return this;
	      }
	
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }
	
	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };
	
	
	
	
	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }
	
	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	
	      var removed = value === NOT_SET;
	
	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };
	
	
	
	
	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }
	
	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };
	
	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	
	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }
	
	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }
	
	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };
	
	
	
	  // #pragma Iterators
	
	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }
	
	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }
	
	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }
	
	  createClass(MapIterator, Iterator);
	
	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }
	
	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };
	
	
	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }
	
	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }
	
	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }
	
	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }
	
	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }
	
	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }
	
	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }
	
	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	
	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);
	
	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }
	
	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }
	
	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }
	
	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }
	
	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }
	
	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }
	
	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }
	
	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }
	
	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }
	
	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }
	
	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }
	
	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }
	
	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }
	
	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
	
	  createClass(List, IndexedCollection);
	
	    // @pragma Construction
	
	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }
	
	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };
	
	    // @pragma Access
	
	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };
	
	    // @pragma Modification
	
	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };
	
	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };
	
	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };
	
	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };
	
	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };
	
	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };
	
	    // @pragma Composition
	
	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };
	
	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };
	
	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };
	
	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };
	
	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };
	
	    // @pragma Iteration
	
	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };
	
	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };
	
	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };
	
	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };
	
	
	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }
	
	  List.isList = isList;
	
	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
	
	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	
	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }
	
	    // TODO: seems like these methods are very similar
	
	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };
	
	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }
	
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }
	
	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };
	
	
	
	  var DONE = {};
	
	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;
	
	    return iterateNodeOrLeaf(list._root, list._level, 0);
	
	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }
	
	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }
	
	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }
	
	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }
	
	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }
	
	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);
	
	    if (index !== index) {
	      return list;
	    }
	
	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }
	
	    index += list._origin;
	
	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }
	
	    if (!didAlter.value) {
	      return list;
	    }
	
	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }
	
	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }
	
	    var newNode;
	
	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }
	
	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }
	
	    SetRef(didAlter);
	
	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }
	
	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }
	
	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }
	
	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }
	
	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }
	
	    var newLevel = list._level;
	    var newRoot = list._root;
	
	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }
	
	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);
	
	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }
	
	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
	
	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }
	
	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }
	
	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
	
	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;
	
	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }
	
	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }
	
	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }
	
	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }
	
	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }
	
	  createClass(OrderedMap, Map);
	
	    // @pragma Construction
	
	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };
	
	    // @pragma Access
	
	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };
	
	    // @pragma Modification
	
	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };
	
	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };
	
	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };
	
	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };
	
	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };
	
	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };
	
	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };
	
	
	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }
	
	  OrderedMap.isOrderedMap = isOrderedMap;
	
	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
	
	
	
	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }
	
	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }
	
	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }
	
	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }
	
	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };
	
	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };
	
	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };
	
	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };
	
	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };
	
	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };
	
	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };
	
	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };
	
	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };
	
	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };
	
	
	
	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };
	
	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };
	
	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };
	
	
	
	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }
	
	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };
	
	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };
	
	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };
	
	
	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;
	
	
	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }
	
	
	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }
	
	
	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }
	
	
	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }
	
	
	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }
	
	
	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }
	
	
	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;
	
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }
	
	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }
	
	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);
	
	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }
	
	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }
	
	    var sliceSeq = makeSequence(iterable);
	
	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;
	
	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }
	
	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };
	
	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }
	
	    return sliceSeq;
	  }
	
	
	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }
	
	
	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }
	
	
	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});
	
	    if (iters.length === 0) {
	      return iterable;
	    }
	
	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }
	
	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }
	
	
	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }
	
	
	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }
	
	
	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }
	
	
	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }
	
	
	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }
	
	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }
	
	
	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }
	
	
	  // #pragma Helper Functions
	
	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }
	
	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }
	
	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }
	
	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }
	
	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }
	
	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }
	
	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }
	
	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }
	
	  createClass(Record, KeyedCollection);
	
	    function Record(defaultValues, name) {
	      var hasInitialized;
	
	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };
	
	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;
	
	      return RecordType;
	    }
	
	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };
	
	    // @pragma Access
	
	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };
	
	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };
	
	    // @pragma Modification
	
	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };
	
	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };
	
	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };
	
	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };
	
	
	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;
	
	
	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }
	
	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }
	
	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }
	
	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }
	
	  createClass(Set, SetCollection);
	
	    // @pragma Construction
	
	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };
	
	    // @pragma Access
	
	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };
	
	    // @pragma Modification
	
	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };
	
	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };
	
	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };
	
	    // @pragma Composition
	
	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };
	
	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };
	
	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };
	
	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };
	
	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };
	
	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };
	
	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };
	
	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };
	
	
	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }
	
	  Set.isSet = isSet;
	
	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
	
	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;
	
	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;
	
	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }
	
	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }
	
	  createClass(OrderedSet, Set);
	
	    // @pragma Construction
	
	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };
	
	
	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }
	
	  OrderedSet.isOrderedSet = isOrderedSet;
	
	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
	
	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;
	
	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }
	
	  createClass(Stack, IndexedCollection);
	
	    // @pragma Construction
	
	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }
	
	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };
	
	    // @pragma Access
	
	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };
	
	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };
	
	    // @pragma Modification
	
	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };
	
	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };
	
	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };
	
	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };
	
	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };
	
	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    // @pragma Mutability
	
	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };
	
	    // @pragma Iteration
	
	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };
	
	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };
	
	
	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }
	
	  Stack.isStack = isStack;
	
	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
	
	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }
	
	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }
	
	  Iterable.Iterator = Iterator;
	
	  mixin(Iterable, {
	
	    // ### Conversion to other types
	
	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },
	
	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },
	
	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },
	
	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },
	
	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },
	
	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },
	
	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },
	
	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },
	
	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },
	
	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	
	    // ### Common JavaScript methods and properties
	
	    toString: function() {
	      return '[Iterable]';
	    },
	
	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },
	
	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },
	
	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },
	
	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },
	
	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },
	
	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },
	
	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },
	
	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },
	
	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },
	
	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },
	
	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },
	
	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },
	
	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },
	
	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },
	
	
	    // ### More sequential methods
	
	    butLast: function() {
	      return this.slice(0, -1);
	    },
	
	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },
	
	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },
	
	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },
	
	    equals: function(other) {
	      return deepEqual(this, other);
	    },
	
	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },
	
	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },
	
	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },
	
	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },
	
	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },
	
	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },
	
	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },
	
	    first: function() {
	      return this.find(returnTrue);
	    },
	
	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },
	
	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },
	
	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },
	
	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },
	
	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },
	
	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },
	
	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },
	
	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },
	
	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },
	
	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },
	
	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },
	
	    last: function() {
	      return this.toSeq().reverse().first();
	    },
	
	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },
	
	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },
	
	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },
	
	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },
	
	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },
	
	    rest: function() {
	      return this.slice(1);
	    },
	
	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },
	
	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },
	
	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },
	
	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },
	
	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },
	
	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },
	
	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },
	
	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },
	
	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },
	
	
	    // ### Hashable Object
	
	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }
	
	
	    // ### Internal
	
	    // abstract __iterate(fn, reverse)
	
	    // abstract __iterator(type, reverse)
	  });
	
	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;
	
	  mixin(KeyedIterable, {
	
	    // ### More sequential methods
	
	    flip: function() {
	      return reify(this, flipFactory(this));
	    },
	
	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },
	
	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }
	
	  });
	
	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};
	
	
	
	  mixin(IndexedIterable, {
	
	    // ### Conversion to other types
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },
	
	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },
	
	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },
	
	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },
	
	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },
	
	
	    // ### More collection methods
	
	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },
	
	    first: function() {
	      return this.get(0);
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },
	
	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },
	
	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },
	
	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },
	
	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },
	
	    keySeq: function() {
	      return Range(0, this.size);
	    },
	
	    last: function() {
	      return this.get(-1);
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },
	
	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },
	
	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }
	
	  });
	
	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	
	  mixin(SetIterable, {
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },
	
	    includes: function(value) {
	      return this.has(value);
	    },
	
	
	    // ### More sequential methods
	
	    keySeq: function() {
	      return this.valueSeq();
	    }
	
	  });
	
	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;
	
	
	  // Mixin subclasses
	
	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);
	
	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);
	
	
	  // #pragma Helper functions
	
	  function keyMapper(v, k) {
	    return k;
	  }
	
	  function entryMapper(v, k) {
	    return [k, v];
	  }
	
	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }
	
	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }
	
	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }
	
	  function defaultZipper() {
	    return arrCopy(arguments);
	  }
	
	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }
	
	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }
	
	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }
	
	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }
	
	  var Immutable = {
	
	    Iterable: Iterable,
	
	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,
	
	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,
	
	    is: is,
	    fromJS: fromJS
	
	  };
	
	  return Immutable;
	
	}));

/***/ },

/***/ 249:
/*!***************************************!*\
  !*** ./~/flux/lib/FluxMixinLegacy.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxMixinLegacy
	 * 
	 */
	
	'use strict';
	
	var FluxStoreGroup = __webpack_require__(/*! ./FluxStoreGroup */ 234);
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 235);
	
	/**
	 * `FluxContainer` should be preferred over this mixin, but it requires using
	 * react with classes. So this mixin is provided where it is not yet possible
	 * to convert a container to be a class.
	 *
	 * This mixin should be used for React components that have state based purely
	 * on stores. `this.props` will not be available inside of `calculateState()`.
	 *
	 * This mixin will only `setState` not replace it, so you should always return
	 * every key in your state unless you know what you are doing. Consider this:
	 *
	 *   var Foo = React.createClass({
	 *     mixins: [
	 *       FluxMixinLegacy([FooStore])
	 *     ],
	 *
	 *     statics: {
	 *       calculateState(prevState) {
	 *         if (!prevState) {
	 *           return {
	 *             foo: FooStore.getFoo(),
	 *           };
	 *         }
	 *
	 *         return {
	 *           bar: FooStore.getBar(),
	 *         };
	 *       }
	 *     },
	 *   });
	 *
	 * On the second calculateState when prevState is not null, the state will be
	 * updated to contain the previous foo AND the bar that was just returned. Only
	 * returning bar will not delete foo.
	 *
	 */
	function FluxMixinLegacy(stores) {
	  return {
	    getInitialState: function () {
	      enforceInterface(this);
	      return this.constructor.calculateState(null);
	    },
	
	    componentDidMount: function () {
	      var _this = this;
	
	      // This tracks when any store has changed and we may need to update.
	      var changed = false;
	      var setChanged = function () {
	        changed = true;
	      };
	
	      // This adds subscriptions to stores. When a store changes all we do is
	      // set changed to true.
	      this._fluxMixinSubscriptions = stores.map(function (store) {
	        return store.addListener(setChanged);
	      });
	
	      // This callback is called after the dispatch of the relevant stores. If
	      // any have reported a change we update the state, then reset changed.
	      var callback = function () {
	        if (changed) {
	          _this.setState(function (prevState) {
	            return _this.constructor.calculateState(_this.state);
	          });
	        }
	        changed = false;
	      };
	      this._fluxMixinStoreGroup = new FluxStoreGroup(stores, callback);
	    },
	
	    componentWillUnmount: function () {
	      this._fluxMixinStoreGroup.release();
	      for (var _iterator = this._fluxMixinSubscriptions, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref;
	
	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }
	
	        var subscription = _ref;
	
	        subscription.remove();
	      }
	      this._fluxMixinSubscriptions = [];
	    }
	  };
	}
	
	function enforceInterface(o) {
	  !o.constructor.calculateState ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Components that use FluxMixinLegacy must implement ' + '`calculateState()` on the statics object') : invariant(false) : undefined;
	}
	
	module.exports = FluxMixinLegacy;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },

/***/ 250:
/*!***************************************!*\
  !*** ./app/components/KanbanBoard.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 251);
	
	var _reactDndHtml5Backend = __webpack_require__(/*! react-dnd-html5-backend */ 372);
	
	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 168);
	
	var _List = __webpack_require__(/*! ./List */ 466);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KanbanBoard = function (_Component) {
	  _inherits(KanbanBoard, _Component);
	
	  function KanbanBoard() {
	    _classCallCheck(this, KanbanBoard);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(KanbanBoard).apply(this, arguments));
	  }
	
	  _createClass(KanbanBoard, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'app' },
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/new', className: 'float-button' },
	          '+'
	        ),
	        _react2.default.createElement(_List2.default, { id: 'todo',
	          title: 'To Do',
	          cards: this.props.cards.filter(function (card) {
	            return card.status === "todo";
	          }) }),
	        _react2.default.createElement(_List2.default, { id: 'in-progress',
	          title: 'In Progress',
	          cards: this.props.cards.filter(function (card) {
	            return card.status === "in-progress";
	          }) }),
	        _react2.default.createElement(_List2.default, { id: 'done',
	          title: 'Done',
	          cards: this.props.cards.filter(function (card) {
	            return card.status === "done";
	          }) }),
	        this.props.children
	      );
	    }
	  }]);
	
	  return KanbanBoard;
	}(_react.Component);
	
	;
	KanbanBoard.propTypes = {
	  cards: _react.PropTypes.arrayOf(_react.PropTypes.object)
	};
	
	exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(KanbanBoard);

/***/ },

/***/ 466:
/*!********************************!*\
  !*** ./app/components/List.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 251);
	
	var _Card = __webpack_require__(/*! ./Card */ 467);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _constants = __webpack_require__(/*! ../constants */ 476);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _CardActionCreators = __webpack_require__(/*! ../actions/CardActionCreators */ 781);
	
	var _CardActionCreators2 = _interopRequireDefault(_CardActionCreators);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var listTargetSpec = {
	  hover: function hover(props, monitor) {
	    var dragged = monitor.getItem();
	    _CardActionCreators2.default.updateCardStatus(dragged.id, props.id);
	  }
	};
	
	function collect(connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget()
	  };
	}
	
	var List = function (_Component) {
	  _inherits(List, _Component);
	
	  function List() {
	    _classCallCheck(this, List);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
	  }
	
	  _createClass(List, [{
	    key: 'render',
	    value: function render() {
	      var connectDropTarget = this.props.connectDropTarget;
	
	
	      var cards = this.props.cards.map(function (card) {
	        return _react2.default.createElement(_Card2.default, _extends({ key: card.id }, card));
	      });
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        { className: 'list' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          this.props.title
	        ),
	        cards
	      ));
	    }
	  }]);
	
	  return List;
	}(_react.Component);
	
	;
	List.propTypes = {
	  title: _react.PropTypes.string.isRequired,
	  cards: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  connectDropTarget: _react.PropTypes.func.isRequired
	};
	
	exports.default = (0, _reactDnd.DropTarget)(_constants2.default.CARD, listTargetSpec, collect)(List);

/***/ },

/***/ 467:
/*!********************************!*\
  !*** ./app/components/Card.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ 468);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _marked = __webpack_require__(/*! marked */ 475);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 251);
	
	var _constants = __webpack_require__(/*! ../constants */ 476);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _CheckList = __webpack_require__(/*! ./CheckList */ 477);
	
	var _CheckList2 = _interopRequireDefault(_CheckList);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 168);
	
	var _CardActionCreators = __webpack_require__(/*! ../actions/CardActionCreators */ 781);
	
	var _CardActionCreators2 = _interopRequireDefault(_CardActionCreators);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var titlePropType = function titlePropType(props, propName, componentName) {
	  if (props[propName]) {
	    var value = props[propName];
	    if (typeof value !== 'string' || value.length > 80) {
	      return new Error(propName + ' in ' + componentName + ' is longer than 80 characters');
	    }
	  }
	};
	
	var cardDragSpec = {
	  beginDrag: function beginDrag(props) {
	    return {
	      id: props.id,
	      status: props.status
	    };
	  },
	  endDrag: function endDrag(props) {
	    _CardActionCreators2.default.persistCardDrag(props);
	  }
	};
	
	var cardDropSpec = {
	  hover: function hover(props, monitor) {
	    var draggedId = monitor.getItem().id;
	    if (props.id !== draggedId) {
	      _CardActionCreators2.default.updateCardPosition(draggedId, props.id);
	    }
	  }
	};
	
	var collectDrag = function collectDrag(connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource()
	  };
	};
	
	var collectDrop = function collectDrop(connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget()
	  };
	};
	
	var Card = function (_Component) {
	  _inherits(Card, _Component);
	
	  function Card() {
	    _classCallCheck(this, Card);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Card).apply(this, arguments));
	  }
	
	  _createClass(Card, [{
	    key: 'toggleDetails',
	    value: function toggleDetails() {
	      _CardActionCreators2.default.toggleCardDetails(this.props.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var connectDragSource = _props.connectDragSource;
	      var connectDropTarget = _props.connectDropTarget;
	
	
	      var cardDetails = void 0;
	      if (this.props.showDetails !== false) {
	        cardDetails = _react2.default.createElement(
	          'div',
	          { className: 'card__details' },
	          _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: (0, _marked2.default)(this.props.description) } }),
	          _react2.default.createElement(_CheckList2.default, { cardId: this.props.id,
	            tasks: this.props.tasks })
	        );
	      }
	
	      var sideColor = {
	        position: 'absolute',
	        zIndex: -1,
	        top: 0,
	        bottom: 0,
	        left: 0,
	        width: 7,
	        backgroundColor: this.props.color
	      };
	
	      return connectDropTarget(connectDragSource(_react2.default.createElement(
	        'div',
	        { className: 'card' },
	        _react2.default.createElement('div', { style: sideColor }),
	        _react2.default.createElement(
	          'div',
	          { className: 'card__edit' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/edit/' + this.props.id },
	            '✎'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: this.props.showDetails !== false ? "card__title card__title--is-open" : "card__title", onClick: this.toggleDetails.bind(this) },
	          this.props.title
	        ),
	        _react2.default.createElement(
	          _reactAddonsCssTransitionGroup2.default,
	          { transitionName: 'toggle',
	            transitionEnterTimeout: 250,
	            transitionLeaveTimeout: 250 },
	          cardDetails
	        )
	      )));
	    }
	  }]);
	
	  return Card;
	}(_react.Component);
	
	Card.propTypes = {
	  id: _react.PropTypes.number,
	  title: titlePropType,
	  description: _react.PropTypes.string,
	  color: _react.PropTypes.string,
	  tasks: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  connectDragSource: _react.PropTypes.func.isRequired,
	  connectDropTarget: _react.PropTypes.func.isRequired
	};
	
	var dragHighOrderCard = (0, _reactDnd.DragSource)(_constants2.default.CARD, cardDragSpec, collectDrag)(Card);
	var dragDropHighOrderCard = (0, _reactDnd.DropTarget)(_constants2.default.CARD, cardDropSpec, collectDrop)(dragHighOrderCard);
	exports.default = dragDropHighOrderCard;

/***/ },

/***/ 476:
/*!**************************!*\
  !*** ./app/constants.js ***!
  \**************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  //API_URL: 'http://kanbanapi.pro-react.com';    //original value
	
	  API_URL: 'http://localhost:55685/api', //reads from ASP.NET CORE
	
	  CARD: 'card',
	
	  FETCH_CARDS: 'fetch cards',
	  FETCH_CARDS_SUCCESS: 'fetch cards success',
	  FETCH_CARDS_ERROR: 'fetch cards error',
	
	  TOGGLE_CARD_DETAILS: 'toggle card details',
	
	  CREATE_CARD: 'create card',
	  CREATE_CARD_SUCCESS: 'create card success',
	  CREATE_CARD_ERROR: 'create card error',
	
	  UPDATE_CARD: 'update card',
	  UPDATE_CARD_SUCCESS: 'update card success',
	  UPDATE_CARD_ERROR: 'update card error',
	
	  UPDATE_CARD_STATUS: 'update card status',
	
	  UPDATE_CARD_POSITION: 'update card position',
	
	  PERSIST_CARD_DRAG: 'persist card drag',
	  PERSIST_CARD_DRAG_SUCCESS: 'persist card drag success',
	  PERSIST_CARD_DRAG_ERROR: 'persist card drag error',
	
	  CREATE_DRAFT: 'create draft',
	  UPDATE_DRAFT: 'update draft',
	
	  CREATE_TASK: 'create task',
	  CREATE_TASK_SUCCESS: 'create task success',
	  CREATE_TASK_ERROR: 'create task error',
	
	  DELETE_TASK: 'delete task',
	  DELETE_TASK_SUCCESS: 'delete task success',
	  DELETE_TASK_ERROR: 'delete task error',
	
	  TOGGLE_TASK: 'toggle task',
	  TOGGLE_TASK_SUCCESS: 'toggle task success',
	  TOGGLE_TASK_ERROR: 'toggle task error'
	
	};

/***/ },

/***/ 477:
/*!*************************************!*\
  !*** ./app/components/CheckList.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TaskActionCreators = __webpack_require__(/*! ../actions/TaskActionCreators */ 478);
	
	var _TaskActionCreators2 = _interopRequireDefault(_TaskActionCreators);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CheckList = function (_Component) {
	  _inherits(CheckList, _Component);
	
	  function CheckList() {
	    _classCallCheck(this, CheckList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckList).apply(this, arguments));
	  }
	
	  _createClass(CheckList, [{
	    key: 'checkInputKeyPress',
	    value: function checkInputKeyPress(evt) {
	      if (evt.key === 'Enter') {
	        var newTask = { id: Date.now(), name: evt.target.value, done: false };
	        _TaskActionCreators2.default.addTask(this.props.cardId, newTask);
	        evt.target.value = '';
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var tasks = this.props.tasks.map(function (task, taskIndex) {
	        return _react2.default.createElement(
	          'li',
	          { key: task.id, className: 'checklist__task' },
	          _react2.default.createElement('input', { type: 'checkbox',
	            checked: task.done,
	            onChange: _TaskActionCreators2.default.toggleTask.bind(null, _this2.props.cardId, task, taskIndex) }),
	          task.name,
	          ' ',
	          _react2.default.createElement('a', { href: '#',
	            className: 'checklist__task--remove',
	            onClick: _TaskActionCreators2.default.deleteTask.bind(null, _this2.props.cardId, task, taskIndex) })
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'checklist' },
	        _react2.default.createElement(
	          'ul',
	          null,
	          tasks
	        ),
	        _react2.default.createElement('input', { type: 'text',
	          className: 'checklist--add-task',
	          placeholder: 'Type then hit Enter to add a task',
	          onKeyPress: this.checkInputKeyPress.bind(this) })
	      );
	    }
	  }]);
	
	  return CheckList;
	}(_react.Component);
	
	CheckList.propTypes = {
	  cardId: _react.PropTypes.number,
	  tasks: _react.PropTypes.arrayOf(_react.PropTypes.object)
	};
	exports.default = CheckList;

/***/ },

/***/ 478:
/*!*******************************************!*\
  !*** ./app/actions/TaskActionCreators.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _AppDispatcher = __webpack_require__(/*! ../AppDispatcher */ 479);
	
	var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);
	
	var _constants = __webpack_require__(/*! ../constants */ 476);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _KanbanApi = __webpack_require__(/*! ../api/KanbanApi */ 779);
	
	var _KanbanApi2 = _interopRequireDefault(_KanbanApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TaskActionCreators = {
	  addTask: function addTask(cardId, task) {
	    _AppDispatcher2.default.dispatchAsync(_KanbanApi2.default.addTask(cardId, task), {
	      request: _constants2.default.CREATE_TASK,
	      success: _constants2.default.CREATE_TASK_SUCCESS,
	      failure: _constants2.default.CREATE_TASK_ERROR
	    }, { cardId: cardId, task: task });
	  },
	  deleteTask: function deleteTask(cardId, task, taskIndex) {
	    _AppDispatcher2.default.dispatchAsync(_KanbanApi2.default.deleteTask(cardId, task), {
	      request: _constants2.default.DELETE_TASK,
	      success: _constants2.default.DELETE_TASK_SUCCESS,
	      failure: _constants2.default.DELETE_TASK_ERROR
	    }, { cardId: cardId, task: task, taskIndex: taskIndex });
	  },
	  toggleTask: function toggleTask(cardId, task, taskIndex) {
	    _AppDispatcher2.default.dispatchAsync(_KanbanApi2.default.toggleTask(cardId, task), {
	      request: _constants2.default.TOGGLE_TASK,
	      success: _constants2.default.TOGGLE_TASK_SUCCESS,
	      failure: _constants2.default.TOGGLE_TASK_ERROR
	    }, { cardId: cardId, task: task, taskIndex: taskIndex });
	  }
	};
	
	exports.default = TaskActionCreators;

/***/ },

/***/ 479:
/*!******************************!*\
  !*** ./app/AppDispatcher.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _flux = __webpack_require__(/*! flux */ 480);
	
	__webpack_require__(/*! babel-polyfill */ 482);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AppDispatcher = function (_Dispatcher) {
	  _inherits(AppDispatcher, _Dispatcher);
	
	  function AppDispatcher() {
	    _classCallCheck(this, AppDispatcher);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AppDispatcher).apply(this, arguments));
	  }
	
	  _createClass(AppDispatcher, [{
	    key: 'dispatchAsync',
	
	    /**
	    * Dispatches three actions for an async operation represented by promise.
	    */
	    value: function dispatchAsync(promise, types, payload) {
	      var _this2 = this;
	
	      var request = types.request;
	      var success = types.success;
	      var failure = types.failure;
	
	      this.dispatch({ type: request, payload: Object.assign({}, payload) });
	      promise.then(function (response) {
	        return _this2.dispatch({
	          type: success,
	          payload: Object.assign({}, payload, { response: response })
	        });
	      }, function (error) {
	        return _this2.dispatch({
	          type: failure,
	          payload: Object.assign({}, payload, { error: error })
	        });
	      });
	    }
	  }]);
	
	  return AppDispatcher;
	}(_flux.Dispatcher);
	
	exports.default = new AppDispatcher();

/***/ },

/***/ 779:
/*!******************************!*\
  !*** ./app/api/KanbanApi.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(/*! whatwg-fetch */ 780);
	
	__webpack_require__(/*! babel-polyfill */ 482);
	
	var _constants = __webpack_require__(/*! ../constants */ 476);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//const API_URL = 'http://kanbanapi.pro-react.com';     //The API_URL has moved into the constants file
	var API_HEADERS = {
	  'Content-Type': 'application/json',
	  Authorization: 'any-string-you-like'
	};
	
	var KanbanAPI = {
	  fetchCards: function fetchCards() {
	    return fetch(_constants2.default.API_URL + '/cards', { headers: API_HEADERS }).then(function (response) {
	      return response.json();
	    });
	  },
	  addCard: function addCard(card) {
	    return fetch(_constants2.default.API_URL + '/cards', {
	      method: 'post',
	      headers: API_HEADERS,
	      body: JSON.stringify(card)
	    }).then(function (response) {
	      return response.json();
	    });
	  },
	  updateCard: function updateCard(card, draftCard) {
	    return fetch(_constants2.default.API_URL + '/cards/' + card.id, {
	      method: 'put',
	      headers: API_HEADERS,
	      body: JSON.stringify(draftCard)
	    });
	  },
	  persistCardDrag: function persistCardDrag(cardId, status, index) {
	    return fetch(_constants2.default.API_URL + '/cards/' + cardId, {
	      method: 'put',
	      headers: API_HEADERS,
	      body: JSON.stringify({ status: status, row_order_position: index })
	    });
	  },
	  addTask: function addTask(cardId, task) {
	    return fetch(_constants2.default.API_URL + '/cards/' + cardId + '/tasks', {
	      method: 'post',
	      headers: API_HEADERS,
	      body: JSON.stringify(task)
	    }).then(function (response) {
	      return response.json();
	    });
	  },
	  deleteTask: function deleteTask(cardId, task) {
	    return fetch(_constants2.default.API_URL + '/cards/' + cardId + '/tasks/' + task.id, {
	      method: 'delete',
	      headers: API_HEADERS
	    });
	  },
	  toggleTask: function toggleTask(cardId, task) {
	    return fetch(_constants2.default.API_URL + '/cards/' + cardId + '/tasks/' + task.id, {
	      method: 'put',
	      headers: API_HEADERS,
	      body: JSON.stringify({ done: !task.done })
	    });
	  }
	};
	
	exports.default = KanbanAPI;

/***/ },

/***/ 781:
/*!*******************************************!*\
  !*** ./app/actions/CardActionCreators.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _AppDispatcher = __webpack_require__(/*! ../AppDispatcher */ 479);
	
	var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);
	
	var _constants = __webpack_require__(/*! ../constants */ 476);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _KanbanApi = __webpack_require__(/*! ../api/KanbanApi */ 779);
	
	var _KanbanApi2 = _interopRequireDefault(_KanbanApi);
	
	var _utils = __webpack_require__(/*! ../utils */ 782);
	
	var _CardStore = __webpack_require__(/*! ../stores/CardStore */ 783);
	
	var _CardStore2 = _interopRequireDefault(_CardStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CardActionCreators = {
	  fetchCards: function fetchCards() {
	    _AppDispatcher2.default.dispatchAsync(_KanbanApi2.default.fetchCards(), {
	      request: _constants2.default.FETCH_CARDS,
	      success: _constants2.default.FETCH_CARDS_SUCCESS,
	      failure: _constants2.default.FETCH_CARDS_ERROR
	    });
	  },
	  toggleCardDetails: function toggleCardDetails(cardId) {
	    _AppDispatcher2.default.dispatch({
	      type: _constants2.default.TOGGLE_CARD_DETAILS,
	      payload: { cardId: cardId }
	    });
	  },
	  addCard: function addCard(card) {
	    _AppDispatcher2.default.dispatchAsync(_KanbanApi2.default.addCard(card), {
	      request: _constants2.default.CREATE_CARD,
	      success: _constants2.default.CREATE_CARD_SUCCESS,
	      failure: _constants2.default.CREATE_CARD_ERROR
	    }, { card: card });
	  },
	  updateCard: function updateCard(card, draftCard) {
	    _AppDispatcher2.default.dispatchAsync(_KanbanApi2.default.updateCard(card, draftCard), {
	      request: _constants2.default.UPDATE_CARD,
	      success: _constants2.default.UPDATE_CARD_SUCCESS,
	      failure: _constants2.default.UPDATE_CARD_ERROR
	    }, { card: card, draftCard: draftCard });
	  },
	
	
	  updateCardStatus: (0, _utils.throttle)(function (cardId, listId) {
	    _AppDispatcher2.default.dispatch({
	      type: _constants2.default.UPDATE_CARD_STATUS,
	      payload: { cardId: cardId, listId: listId }
	    });
	  }),
	
	  updateCardPosition: (0, _utils.throttle)(function (cardId, afterId) {
	    _AppDispatcher2.default.dispatch({
	      type: _constants2.default.UPDATE_CARD_POSITION,
	      payload: { cardId: cardId, afterId: afterId }
	    });
	  }, 500),
	
	  persistCardDrag: function persistCardDrag(cardProps) {
	    var card = _CardStore2.default.getCard(cardProps.id);
	    var cardIndex = _CardStore2.default.getCardIndex(cardProps.id);
	    _AppDispatcher2.default.dispatchAsync(_KanbanApi2.default.persistCardDrag(card.id, card.status, cardIndex), {
	      request: _constants2.default.PERSIST_CARD_DRAG,
	      success: _constants2.default.PERSIST_CARD_DRAG_SUCCESS,
	      failure: _constants2.default.PERSIST_CARD_DRAG_ERROR
	    }, { cardProps: cardProps });
	  },
	  createDraft: function createDraft(card) {
	    _AppDispatcher2.default.dispatch({
	      type: _constants2.default.CREATE_DRAFT,
	      payload: { card: card }
	    });
	  },
	  updateDraft: function updateDraft(field, value) {
	    _AppDispatcher2.default.dispatch({
	      type: _constants2.default.UPDATE_DRAFT,
	      payload: { field: field, value: value }
	    });
	  }
	};
	
	exports.default = CardActionCreators;

/***/ },

/***/ 782:
/*!**********************!*\
  !*** ./app/utils.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.throttle = undefined;
	
	__webpack_require__(/*! babel-polyfill */ 482);
	
	var throttle = exports.throttle = function throttle(func, wait) {
	  var context = void 0,
	      args = void 0,
	      prevArgs = void 0,
	      argsChanged = void 0,
	      result = void 0;
	  var previous = 0;
	  return function () {
	    var now = void 0,
	        remaining = void 0;
	    if (wait) {
	      now = Date.now();
	      remaining = wait - (now - previous);
	    }
	    context = this;
	    args = arguments;
	    argsChanged = JSON.stringify(args) != JSON.stringify(prevArgs);
	    prevArgs = Object.assign({}, args);
	    if (argsChanged || wait && (remaining <= 0 || remaining > wait)) {
	      if (wait) {
	        previous = now;
	      }
	      result = func.apply(context, args);
	      context = args = null;
	    }
	    return result;
	  };
	};

/***/ },

/***/ 783:
/*!*********************************!*\
  !*** ./app/stores/CardStore.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AppDispatcher = __webpack_require__(/*! ../AppDispatcher */ 479);
	
	var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);
	
	var _constants = __webpack_require__(/*! ../constants */ 476);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _utils = __webpack_require__(/*! flux/utils */ 232);
	
	var _reactAddonsUpdate = __webpack_require__(/*! react-addons-update */ 784);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	__webpack_require__(/*! babel-polyfill */ 482);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CardStore = function (_ReduceStore) {
	  _inherits(CardStore, _ReduceStore);
	
	  function CardStore() {
	    _classCallCheck(this, CardStore);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardStore).apply(this, arguments));
	  }
	
	  _createClass(CardStore, [{
	    key: 'getInitialState',
	    value: function getInitialState() {
	      return [];
	    }
	  }, {
	    key: 'getCard',
	    value: function getCard(id) {
	      return this._state.find(function (card) {
	        return card.id == id;
	      });
	    }
	  }, {
	    key: 'getCardIndex',
	    value: function getCardIndex(id) {
	      return this._state.findIndex(function (card) {
	        return card.id == id;
	      });
	    }
	  }, {
	    key: 'reduce',
	    value: function reduce(state, action) {
	      switch (action.type) {
	        case _constants2.default.FETCH_CARDS_SUCCESS:
	          return action.payload.response;
	        /*
	         * Card Creation
	         */
	        case _constants2.default.CREATE_CARD:
	          return (0, _reactAddonsUpdate2.default)(this.getState(), { $push: [action.payload.card] });
	
	        case _constants2.default.CREATE_CARD_SUCCESS:
	          cardIndex = this.getCardIndex(action.payload.card.id);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            id: { $set: action.payload.response.id }
	          }));
	
	        case _constants2.default.CREATE_CARD_ERROR:
	          cardIndex = this.getCardIndex(action.payload.card.id);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), { $splice: [[cardIndex, 1]] });
	
	        /*
	         * Card Status Toggle
	         */
	        case _constants2.default.TOGGLE_CARD_DETAILS:
	          cardIndex = this.getCardIndex(action.payload.cardId);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            showDetails: { $apply: function $apply(currentValue) {
	                return currentValue !== false ? false : true;
	              } }
	          }));
	
	        /*
	         * Card Update
	         */
	        case _constants2.default.UPDATE_CARD:
	          cardIndex = this.getCardIndex(action.payload.card.id);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            $set: action.payload.draftCard
	          }));
	
	        case _constants2.default.UPDATE_CARD_ERROR:
	          cardIndex = this.getCardIndex(action.payload.card.id);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            $set: action.payload.card
	          }));
	
	        /*
	         * Card Drag'n Drop
	         */
	        case _constants2.default.UPDATE_CARD_POSITION:
	          if (action.payload.cardId !== action.payload.afterId) {
	            cardIndex = this.getCardIndex(action.payload.cardId);
	            var card = this.getState()[cardIndex];
	            var afterIndex = this.getCardIndex(action.payload.afterId);
	            return (0, _reactAddonsUpdate2.default)(this.getState(), {
	              $splice: [[cardIndex, 1], [afterIndex, 0, card]]
	            });
	          }
	
	        case _constants2.default.UPDATE_CARD_STATUS:
	          cardIndex = this.getCardIndex(action.payload.cardId);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            status: { $set: action.payload.listId }
	          }));
	
	        case _constants2.default.PERSIST_CARD_DRAG_ERROR:
	          cardIndex = this.getCardIndex(action.payload.cardProps.id);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            status: { $set: action.payload.cardProps.status }
	          }));
	
	        /*
	         * Task Creation
	         */
	        case _constants2.default.CREATE_TASK:
	          cardIndex = this.getCardIndex(action.payload.cardId);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            tasks: { $push: [action.payload.task] }
	          }));
	
	        case _constants2.default.CREATE_TASK_SUCCESS:
	          cardIndex = this.getCardIndex(action.payload.cardId);
	          taskIndex = this.getState()[cardIndex].tasks.findIndex(function (task) {
	            return task.id == action.payload.task.id;
	          });
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            tasks: _defineProperty({}, taskIndex, {
	              id: { $set: action.payload.response.id }
	            })
	          }));
	
	        case _constants2.default.CREATE_TASK_ERROR:
	          var cardIndex = this.getCardIndex(action.payload.cardId);
	          var taskIndex = this.getState()[cardIndex].tasks.findIndex(function (task) {
	            return task.id == action.payload.task.id;
	          });
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            tasks: {
	              $splice: [[taskIndex, 1]]
	            }
	          }));
	
	        /*
	         * Task Deletion
	         */
	        case _constants2.default.DELETE_TASK:
	          cardIndex = this.getCardIndex(action.payload.cardId);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            tasks: { $splice: [[action.payload.taskIndex, 1]] }
	          }));
	
	        case _constants2.default.DELETE_TASK_ERROR:
	          cardIndex = this.getCardIndex(action.payload.cardId);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            tasks: { $splice: [[action.payload.taskIndex, 0, action.payload.task]] }
	          }));
	
	        /*
	         * Task Toggling
	         */
	        case _constants2.default.TOGGLE_TASK:
	          cardIndex = this.getCardIndex(action.payload.cardId);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            tasks: _defineProperty({}, action.payload.taskIndex, { done: { $apply: function $apply(done) {
	                  return !done;
	                } } })
	          }));
	
	        case _constants2.default.TOGGLE_TASK_ERROR:
	          cardIndex = this.getCardIndex(action.payload.cardId);
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, cardIndex, {
	            tasks: _defineProperty({}, action.payload.taskIndex, { done: { $apply: function $apply(done) {
	                  return !done;
	                } } })
	          }));
	
	        default:
	          return state;
	      }
	    }
	  }]);
	
	  return CardStore;
	}(_utils.ReduceStore);
	
	exports.default = new CardStore(_AppDispatcher2.default);

/***/ },

/***/ 786:
/*!************************************!*\
  !*** ./app/components/EditCard.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CardForm = __webpack_require__(/*! ./CardForm */ 787);
	
	var _CardForm2 = _interopRequireDefault(_CardForm);
	
	var _CardStore = __webpack_require__(/*! ../stores/CardStore */ 783);
	
	var _CardStore2 = _interopRequireDefault(_CardStore);
	
	var _DraftStore = __webpack_require__(/*! ../stores/DraftStore */ 788);
	
	var _DraftStore2 = _interopRequireDefault(_DraftStore);
	
	var _utils = __webpack_require__(/*! flux/utils */ 232);
	
	var _CardActionCreators = __webpack_require__(/*! ../actions/CardActionCreators */ 781);
	
	var _CardActionCreators2 = _interopRequireDefault(_CardActionCreators);
	
	__webpack_require__(/*! babel-polyfill */ 482);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EditCard = function (_Component) {
	  _inherits(EditCard, _Component);
	
	  function EditCard() {
	    _classCallCheck(this, EditCard);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EditCard).apply(this, arguments));
	  }
	
	  _createClass(EditCard, [{
	    key: 'handleChange',
	    value: function handleChange(field, value) {
	      _CardActionCreators2.default.updateDraft(field, value);
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      _CardActionCreators2.default.updateCard(_CardStore2.default.getCard(this.props.params.card_id), this.state.draft);
	
	      this.props.history.pushState(null, '/');
	    }
	  }, {
	    key: 'handleClose',
	    value: function handleClose(e) {
	      this.props.history.pushState(null, '/');
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      setTimeout(function () {
	        _CardActionCreators2.default.createDraft(_CardStore2.default.getCard(_this2.props.params.card_id));
	      }, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_CardForm2.default, { draftCard: this.state.draft,
	        buttonLabel: 'Edit Card',
	        handleChange: this.handleChange.bind(this),
	        handleSubmit: this.handleSubmit.bind(this),
	        handleClose: this.handleClose.bind(this) });
	    }
	  }]);
	
	  return EditCard;
	}(_react.Component);
	
	EditCard.getStores = function () {
	  return [_DraftStore2.default];
	};
	EditCard.calculateState = function (prevState) {
	  return {
	    draft: _DraftStore2.default.getState()
	  };
	};
	
	exports.default = _utils.Container.create(EditCard);

/***/ },

/***/ 787:
/*!************************************!*\
  !*** ./app/components/CardForm.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CardForm = function (_Component) {
	  _inherits(CardForm, _Component);
	
	  function CardForm() {
	    _classCallCheck(this, CardForm);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardForm).apply(this, arguments));
	  }
	
	  _createClass(CardForm, [{
	    key: 'handleChange',
	    value: function handleChange(field, e) {
	      this.props.handleChange(field, e.target.value);
	    }
	  }, {
	    key: 'handleClose',
	    value: function handleClose(e) {
	      e.preventDefault();
	      this.props.handleClose();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'card big' },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.props.handleSubmit.bind(this) },
	            _react2.default.createElement('input', { type: 'text',
	              value: this.props.draftCard.title,
	              onChange: this.handleChange.bind(this, 'title'),
	              placeholder: 'Title',
	              required: true,
	              autoFocus: true }),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('textarea', { value: this.props.draftCard.description,
	              onChange: this.handleChange.bind(this, 'description'),
	              placeholder: 'Description',
	              required: true }),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'status' },
	              'Status'
	            ),
	            _react2.default.createElement(
	              'select',
	              { id: 'status',
	                value: this.props.draftCard.status,
	                onChange: this.handleChange.bind(this, 'status') },
	              _react2.default.createElement(
	                'option',
	                { value: 'todo' },
	                'To Do'
	              ),
	              _react2.default.createElement(
	                'option',
	                { value: 'in-progress' },
	                'In Progress'
	              ),
	              _react2.default.createElement(
	                'option',
	                { value: 'done' },
	                'Done'
	              )
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'color' },
	              'Color'
	            ),
	            _react2.default.createElement('input', { id: 'color',
	              value: this.props.draftCard.color,
	              onChange: this.handleChange.bind(this, 'color'),
	              type: 'color',
	              defaultValue: '#ff0000' }),
	            _react2.default.createElement(
	              'div',
	              { className: 'actions' },
	              _react2.default.createElement(
	                'button',
	                { type: 'submit' },
	                this.props.buttonLabel
	              )
	            )
	          )
	        ),
	        _react2.default.createElement('div', { className: 'overlay', onClick: this.handleClose.bind(this) })
	      );
	    }
	  }]);
	
	  return CardForm;
	}(_react.Component);
	
	CardForm.propTypes = {
	  buttonLabel: _react.PropTypes.string.isRequired,
	  draftCard: _react.PropTypes.shape({
	    title: _react.PropTypes.string,
	    description: _react.PropTypes.string,
	    status: _react.PropTypes.string,
	    color: _react.PropTypes.string
	  }).isRequired,
	  handleChange: _react.PropTypes.func.isRequired,
	  handleSubmit: _react.PropTypes.func.isRequired,
	  handleClose: _react.PropTypes.func.isRequired
	};
	
	exports.default = CardForm;

/***/ },

/***/ 788:
/*!**********************************!*\
  !*** ./app/stores/DraftStore.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AppDispatcher = __webpack_require__(/*! ../AppDispatcher */ 479);
	
	var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);
	
	var _constants = __webpack_require__(/*! ../constants */ 476);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _utils = __webpack_require__(/*! flux/utils */ 232);
	
	var _reactAddonsUpdate = __webpack_require__(/*! react-addons-update */ 784);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultDraft = function defaultDraft() {
	  return {
	    id: Date.now(),
	    title: '',
	    description: '',
	    status: 'todo',
	    color: '#c9c9c9',
	    tasks: []
	  };
	};
	
	var DraftStore = function (_ReduceStore) {
	  _inherits(DraftStore, _ReduceStore);
	
	  function DraftStore() {
	    _classCallCheck(this, DraftStore);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DraftStore).apply(this, arguments));
	  }
	
	  _createClass(DraftStore, [{
	    key: 'getInitialState',
	    value: function getInitialState() {
	      return {};
	    }
	  }, {
	    key: 'reduce',
	    value: function reduce(state, action) {
	      switch (action.type) {
	        case _constants2.default.CREATE_DRAFT:
	          if (action.payload.card) {
	            return (0, _reactAddonsUpdate2.default)(this.getState(), {
	              $set: action.payload.card
	            });
	          } else {
	            return defaultDraft();
	          }
	
	        case _constants2.default.UPDATE_DRAFT:
	          return (0, _reactAddonsUpdate2.default)(this.getState(), _defineProperty({}, action.payload.field, {
	            $set: action.payload.value
	          }));
	
	        default:
	          return state;
	      }
	    }
	  }]);
	
	  return DraftStore;
	}(_utils.ReduceStore);
	
	exports.default = new DraftStore(_AppDispatcher2.default);

/***/ },

/***/ 789:
/*!***********************************!*\
  !*** ./app/components/NewCard.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CardForm = __webpack_require__(/*! ./CardForm */ 787);
	
	var _CardForm2 = _interopRequireDefault(_CardForm);
	
	var _DraftStore = __webpack_require__(/*! ../stores/DraftStore */ 788);
	
	var _DraftStore2 = _interopRequireDefault(_DraftStore);
	
	var _utils = __webpack_require__(/*! flux/utils */ 232);
	
	var _CardActionCreators = __webpack_require__(/*! ../actions/CardActionCreators */ 781);
	
	var _CardActionCreators2 = _interopRequireDefault(_CardActionCreators);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NewCard = function (_Component) {
	  _inherits(NewCard, _Component);
	
	  function NewCard() {
	    _classCallCheck(this, NewCard);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NewCard).apply(this, arguments));
	  }
	
	  _createClass(NewCard, [{
	    key: 'handleChange',
	    value: function handleChange(field, value) {
	      _CardActionCreators2.default.updateDraft(field, value);
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      _CardActionCreators2.default.addCard(this.state.draft);
	      this.props.history.pushState(null, '/');
	    }
	  }, {
	    key: 'handleClose',
	    value: function handleClose(e) {
	      this.props.history.pushState(null, '/');
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      setTimeout(function () {
	        return _CardActionCreators2.default.createDraft();
	      }, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_CardForm2.default, { draftCard: this.state.draft,
	        buttonLabel: 'Create Card',
	        handleChange: this.handleChange.bind(this),
	        handleSubmit: this.handleSubmit.bind(this),
	        handleClose: this.handleClose.bind(this) });
	    }
	  }]);
	
	  return NewCard;
	}(_react.Component);
	
	NewCard.getStores = function () {
	  return [_DraftStore2.default];
	};
	NewCard.calculateState = function (prevState) {
	  return {
	    draft: _DraftStore2.default.getState()
	  };
	};
	
	exports.default = _utils.Container.create(NewCard);

/***/ }

});
//# sourceMappingURL=main.js.map