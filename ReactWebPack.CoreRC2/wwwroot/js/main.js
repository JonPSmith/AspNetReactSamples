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
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
	var _reduxStore = __webpack_require__(/*! ./stores/reduxStore */ 253);
	
	var _reduxStore2 = _interopRequireDefault(_reduxStore);
	
	var _index = __webpack_require__(/*! ./reducers/index */ 258);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _KanbanBoardContainer = __webpack_require__(/*! ./containers/KanbanBoardContainer */ 562);
	
	var _KanbanBoardContainer2 = _interopRequireDefault(_KanbanBoardContainer);
	
	var _KanbanBoard = __webpack_require__(/*! ./components/KanbanBoard */ 563);
	
	var _KanbanBoard2 = _interopRequireDefault(_KanbanBoard);
	
	var _EditCard = __webpack_require__(/*! ./components/EditCard */ 796);
	
	var _EditCard2 = _interopRequireDefault(_EditCard);
	
	var _NewCard = __webpack_require__(/*! ./components/NewCard */ 798);
	
	var _NewCard2 = _interopRequireDefault(_NewCard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _reduxStore2.default },
	  _react2.default.createElement(
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
	  )
	), document.getElementById('root'));

/***/ },

/***/ 253:
/*!**********************************!*\
  !*** ./app/stores/reduxStore.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 238);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 254);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxThrottle = __webpack_require__(/*! redux-throttle */ 255);
	
	var _reduxThrottle2 = _interopRequireDefault(_reduxThrottle);
	
	var _index = __webpack_require__(/*! ../reducers/index */ 258);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultThrottleOption = { // https://lodash.com/docs#throttle
	  leading: true,
	  trailing: false
	};
	
	var throttleMiddleWare = (0, _reduxThrottle2.default)(500, defaultThrottleOption); //default 500ms,
	
	var reduxStore = (0, _redux.createStore)(_index2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, throttleMiddleWare));
	
	exports.default = reduxStore;

/***/ },

/***/ 258:
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 238);
	
	var _cardReducer = __webpack_require__(/*! ./cardReducer */ 259);
	
	var _cardReducer2 = _interopRequireDefault(_cardReducer);
	
	var _draftCardReducer = __webpack_require__(/*! ./draftCardReducer */ 561);
	
	var _draftCardReducer2 = _interopRequireDefault(_draftCardReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reducers = (0, _redux.combineReducers)({
	  cards: _cardReducer2.default,
	  draftCard: _draftCardReducer2.default
	});
	
	exports.default = reducers;

/***/ },

/***/ 259:
/*!*************************************!*\
  !*** ./app/reducers/cardReducer.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(/*! ../constants */ 260);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _cardUtils = __webpack_require__(/*! ../cardUtils */ 261);
	
	var _reactAddonsUpdate = __webpack_require__(/*! react-addons-update */ 559);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var initialState = [];
	
	var cards = function cards() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _constants2.default.FETCH_CARDS_SUCCESS:
	      return action.payload.response;
	    /*
	     * Card Creation
	     */
	    case _constants2.default.CREATE_CARD:
	      return (0, _reactAddonsUpdate2.default)(state, { $push: [action.payload.card] });
	
	    case _constants2.default.CREATE_CARD_SUCCESS:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.card.id);
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        id: { $set: action.payload.response.id }
	      }));
	
	    case _constants2.default.CREATE_CARD_ERROR:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.card.id);
	      return (0, _reactAddonsUpdate2.default)(state, { $splice: [[cardIndex, 1]] });
	
	    /*
	     * Card Status Toggle
	     */
	    case _constants2.default.TOGGLE_CARD_DETAILS:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.cardId);
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        showDetails: { $apply: function $apply(currentValue) {
	            return currentValue !== false ? false : true;
	          } }
	      }));
	
	    /*
	     * Card Update
	     */
	    case _constants2.default.UPDATE_CARD:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.card.id);
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        $set: action.payload.draftCard
	      }));
	
	    case _constants2.default.UPDATE_CARD_ERROR:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.card.id);
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        $set: action.payload.card
	      }));
	
	    /*
	     * Card Drag'n Drop
	     */
	    case _constants2.default.UPDATE_CARD_POSITION:
	      if (action.payload.cardId !== action.payload.afterId) {
	        cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.cardId);
	        var card = state[cardIndex];
	        var afterIndex = (0, _cardUtils.getCardIndex)(state, action.payload.afterId);
	        return (0, _reactAddonsUpdate2.default)(state, {
	          $splice: [[cardIndex, 1], [afterIndex, 0, card]]
	        });
	      }
	
	    case _constants2.default.UPDATE_CARD_STATUS:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.cardId);
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        status: { $set: action.payload.listId }
	      }));
	
	    case _constants2.default.PERSIST_CARD_DRAG_ERROR:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.cardProps.id);
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        status: { $set: action.cardProps.status }
	      }));
	
	    /*
	     * Task Creation
	     */
	    case _constants2.default.CREATE_TASK:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.cardId);
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        tasks: { $push: [action.payload.task] }
	      }));
	
	    case _constants2.default.CREATE_TASK_SUCCESS:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.cardId);
	      taskIndex = state[cardIndex].tasks.findIndex(function (task) {
	        return task.id == action.payload.task.id;
	      });
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        tasks: _defineProperty({}, taskIndex, {
	          id: { $set: action.payload.response.id }
	        })
	      }));
	
	    case _constants2.default.CREATE_TASK_ERROR:
	      var cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.cardId);
	      var taskIndex = state[cardIndex].tasks.findIndex(function (task) {
	        return task.id == action.payload.task.id;
	      });
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        tasks: {
	          $splice: [[taskIndex, 1]]
	        }
	      }));
	
	    /*
	     * Task Deletion
	     */
	    case _constants2.default.DELETE_TASK:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.cardId);
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        tasks: { $splice: [[action.payload.taskIndex, 1]] }
	      }));
	
	    case _constants2.default.DELETE_TASK_ERROR:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.cardId);
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        tasks: { $splice: [[action.payload.taskIndex, 0, action.payload.task]] }
	      }));
	
	    /*
	     * Task Toggling
	     */
	    case _constants2.default.TOGGLE_TASK:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.cardId);
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        tasks: _defineProperty({}, action.payload.taskIndex, { done: { $apply: function $apply(done) {
	              return !done;
	            } } })
	      }));
	
	    case _constants2.default.TOGGLE_TASK_ERROR:
	      cardIndex = (0, _cardUtils.getCardIndex)(state, action.payload.cardId);
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, cardIndex, {
	        tasks: _defineProperty({}, action.payload.taskIndex, { done: { $apply: function $apply(done) {
	              return !done;
	            } } })
	      }));
	
	    default:
	      return state;
	  }
	};
	
	exports.default = cards;

/***/ },

/***/ 260:
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

/***/ 261:
/*!**************************!*\
  !*** ./app/cardUtils.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getCard = getCard;
	exports.getCardIndex = getCardIndex;
	
	var _babelPolyfill = __webpack_require__(/*! babel-polyfill */ 262);
	
	function getCard(cards, id) {
	    if (!Array.isArray(cards)) {
	        throw new Error('cards must be an array.');
	    }
	    return cards.find(function (card) {
	        return card.id == id;
	    });
	};
	
	function getCardIndex(cards, id) {
	    if (!Array.isArray(cards)) {
	        throw new Error('cards must be an array.');
	    }
	    return cards.findIndex(function (card) {
	        return card.id == id;
	    });
	};

/***/ },

/***/ 561:
/*!******************************************!*\
  !*** ./app/reducers/draftCardReducer.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(/*! ../constants */ 260);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _reactAddonsUpdate = __webpack_require__(/*! react-addons-update */ 559);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var initialState = {
	  id: Date.now(),
	  title: '',
	  description: '',
	  status: 'todo',
	  color: '#c9c9c9',
	  tasks: []
	};
	
	var draftCard = function draftCard() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _constants2.default.CREATE_DRAFT:
	      if (action.payload.card) {
	        return (0, _reactAddonsUpdate2.default)(state, {
	          $set: action.payload.card
	        });
	      } else {
	        return initialState;
	      }
	
	    case _constants2.default.UPDATE_DRAFT:
	      return (0, _reactAddonsUpdate2.default)(state, _defineProperty({}, action.payload.field, {
	        $set: action.payload.value
	      }));
	
	    default:
	      return state;
	  }
	};
	
	exports.default = draftCard;

/***/ },

/***/ 562:
/*!************************************************!*\
  !*** ./app/containers/KanbanBoardContainer.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 238);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
	var _KanbanBoard = __webpack_require__(/*! ../components/KanbanBoard */ 563);
	
	var _KanbanBoard2 = _interopRequireDefault(_KanbanBoard);
	
	var _CardActionCreators = __webpack_require__(/*! ../actions/CardActionCreators */ 794);
	
	var _CardActionCreators2 = _interopRequireDefault(_CardActionCreators);
	
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
	      this.props.fetchCards();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var kanbanBoard = this.props.children && _react2.default.cloneElement(this.props.children, {
	        cards: this.props.cards
	      });
	
	      return kanbanBoard;
	    }
	  }]);
	
	  return KanbanBoardContainer;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    cards: state.cards
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    fetchCards: function fetchCards() {
	      return dispatch(_CardActionCreators2.default.fetchCards());
	    }
	  };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(KanbanBoardContainer);

/***/ },

/***/ 563:
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
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 564);
	
	var _reactDndHtml5Backend = __webpack_require__(/*! react-dnd-html5-backend */ 685);
	
	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 168);
	
	var _List = __webpack_require__(/*! ./List */ 779);
	
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

/***/ 779:
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
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 564);
	
	var _Card = __webpack_require__(/*! ./Card */ 780);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _constants = __webpack_require__(/*! ../constants */ 260);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _CardActionCreators = __webpack_require__(/*! ../actions/CardActionCreators */ 794);
	
	var _CardActionCreators2 = _interopRequireDefault(_CardActionCreators);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var listTargetSpec = {
	  hover: function hover(props, monitor) {
	    var dragged = monitor.getItem();
	    props.dispatch(_CardActionCreators2.default.updateCardStatus(dragged.id, props.id));
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
	
	exports.default = (0, _reactRedux.connect)()((0, _reactDnd.DropTarget)(_constants2.default.CARD, listTargetSpec, collect)(List));

/***/ },

/***/ 780:
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
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ 781);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _marked = __webpack_require__(/*! marked */ 788);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 564);
	
	var _constants = __webpack_require__(/*! ../constants */ 260);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _CheckList = __webpack_require__(/*! ./CheckList */ 789);
	
	var _CheckList2 = _interopRequireDefault(_CheckList);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 168);
	
	var _CardActionCreators = __webpack_require__(/*! ../actions/CardActionCreators */ 794);
	
	var _CardActionCreators2 = _interopRequireDefault(_CardActionCreators);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
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
	    props.persistCardDrag(props);
	  }
	};
	
	var cardDropSpec = {
	  hover: function hover(props, monitor) {
	    var draggedId = monitor.getItem().id;
	    if (props.id !== draggedId) {
	      props.updateCardPosition(draggedId, props.id);
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
	      this.props.toggleCardDetails(this.props.id);
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
	
	function mapDispatchToProps(dispatch) {
	  return {
	    persistCardDrag: function persistCardDrag(props) {
	      return _CardActionCreators2.default.persistCardDrag(props);
	    },
	    updateCardPosition: function updateCardPosition(draggedId, id) {
	      return _CardActionCreators2.default.updateCardPosition(draggedId, id);
	    },
	    toggleCardDetails: function toggleCardDetails(id) {
	      return _CardActionCreators2.default.toggleCardDetails(id);
	    }
	  };
	}
	
	var dragHighOrderCard = (0, _reactDnd.DragSource)(_constants2.default.CARD, cardDragSpec, collectDrag)(Card);
	var dragDropHighOrderCard = (0, _reactDnd.DropTarget)(_constants2.default.CARD, cardDropSpec, collectDrop)(dragHighOrderCard);
	exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(dragDropHighOrderCard);

/***/ },

/***/ 789:
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
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
	var _redux = __webpack_require__(/*! redux */ 238);
	
	var _TaskActionCreators = __webpack_require__(/*! ../actions/TaskActionCreators */ 790);
	
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
	        this.props.actions.addTask(this.props.cardId, newTask);
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
	            onChange: _this2.props.actions.toggleTask.bind(_this2, _this2.props.cardId, task, taskIndex) }),
	          task.name,
	          ' ',
	          _react2.default.createElement('a', { href: '#',
	            className: 'checklist__task--remove',
	            onClick: _this2.props.actions.deleteTask.bind(_this2, _this2.props.cardId, task, taskIndex) })
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
	
	function mapStateToProps(state) {
	  return {
	    cards: state.cards
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(_TaskActionCreators2.default, dispatch)
	  };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CheckList);

/***/ },

/***/ 790:
/*!*******************************************!*\
  !*** ./app/actions/TaskActionCreators.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ReduxDispatcher = __webpack_require__(/*! ../ReduxDispatcher */ 791);
	
	var _constants = __webpack_require__(/*! ../constants */ 260);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _KanbanApi = __webpack_require__(/*! ../api/KanbanApi */ 792);
	
	var _KanbanApi2 = _interopRequireDefault(_KanbanApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TaskActionCreators = {
	  addTask: function addTask(cardId, task) {
	    return function (dispatch) {
	      (0, _ReduxDispatcher.dispatchAsync)(_KanbanApi2.default.addTask(cardId, task), dispatch, {
	        request: _constants2.default.CREATE_TASK,
	        success: _constants2.default.CREATE_TASK_SUCCESS,
	        failure: _constants2.default.CREATE_TASK_ERROR
	      }, { cardId: cardId, task: task });
	    };
	  },
	  deleteTask: function deleteTask(cardId, task, taskIndex) {
	    return function (dispatch) {
	      (0, _ReduxDispatcher.dispatchAsync)(_KanbanApi2.default.deleteTask(cardId, task), dispatch, {
	        request: _constants2.default.DELETE_TASK,
	        success: _constants2.default.DELETE_TASK_SUCCESS,
	        failure: _constants2.default.DELETE_TASK_ERROR
	      }, { cardId: cardId, task: task, taskIndex: taskIndex });
	    };
	  },
	  toggleTask: function toggleTask(cardId, task, taskIndex) {
	    return function (dispatch) {
	      (0, _ReduxDispatcher.dispatchAsync)(_KanbanApi2.default.toggleTask(cardId, task), dispatch, {
	        request: _constants2.default.TOGGLE_TASK,
	        success: _constants2.default.TOGGLE_TASK_SUCCESS,
	        failure: _constants2.default.TOGGLE_TASK_ERROR
	      }, { cardId: cardId, task: task, taskIndex: taskIndex });
	    };
	  }
	};
	
	exports.default = TaskActionCreators;

/***/ },

/***/ 791:
/*!********************************!*\
  !*** ./app/ReduxDispatcher.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dispatchAsync = dispatchAsync;
	
	__webpack_require__(/*! babel-polyfill */ 262);
	
	/**
	* This does the async request and provides Redux thunk feedback 
	*/
	function dispatchAsync(promise, dispatch, types, payload) {
	  if (typeof dispatch !== 'function') {
	    throw new Error('dispatch was not a function. Did you miss an update to the call?');
	  }
	  var request = types.request;
	  var success = types.success;
	  var failure = types.failure;
	
	  dispatch({
	    type: request,
	    payload: Object.assign({}, payload)
	  });
	  promise.then(function (response) {
	    return dispatch({
	      type: success,
	      success: true,
	      payload: Object.assign({}, payload, { response: response })
	    });
	  }, function (error) {
	    return dispatch({
	      type: failure,
	      success: false,
	      payload: Object.assign({}, payload, { error: error })
	    });
	  });
	};

/***/ },

/***/ 792:
/*!******************************!*\
  !*** ./app/api/KanbanApi.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(/*! whatwg-fetch */ 793);
	
	__webpack_require__(/*! babel-polyfill */ 262);
	
	var _constants = __webpack_require__(/*! ../constants */ 260);
	
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

/***/ 794:
/*!*******************************************!*\
  !*** ./app/actions/CardActionCreators.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ReduxDispatcher = __webpack_require__(/*! ../ReduxDispatcher */ 791);
	
	var _constants = __webpack_require__(/*! ../constants */ 260);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _KanbanApi = __webpack_require__(/*! ../api/KanbanApi */ 792);
	
	var _KanbanApi2 = _interopRequireDefault(_KanbanApi);
	
	var _utils = __webpack_require__(/*! ../utils */ 795);
	
	var _cardUtils = __webpack_require__(/*! ../cardUtils */ 261);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CardActionCreators = {
	  fetchCards: function fetchCards() {
	    return function (dispatch) {
	      (0, _ReduxDispatcher.dispatchAsync)(_KanbanApi2.default.fetchCards(), dispatch, {
	        request: _constants2.default.FETCH_CARDS,
	        success: _constants2.default.FETCH_CARDS_SUCCESS,
	        failure: _constants2.default.FETCH_CARDS_ERROR
	      });
	    };
	  },
	  toggleCardDetails: function toggleCardDetails(cardId) {
	    return {
	      type: _constants2.default.TOGGLE_CARD_DETAILS,
	      payload: cardId
	    };
	  },
	  addCard: function addCard(card) {
	    return function (dispatch) {
	      (0, _ReduxDispatcher.dispatchAsync)(_KanbanApi2.default.addCard(card), dispatch, {
	        request: _constants2.default.CREATE_CARD,
	        success: _constants2.default.CREATE_CARD_SUCCESS,
	        failure: _constants2.default.CREATE_CARD_ERROR
	      }, { card: card });
	    };
	  },
	  updateCard: function updateCard(card, draftCard) {
	    return function (dispatch) {
	      (0, _ReduxDispatcher.dispatchAsync)(_KanbanApi2.default.updateCard(card, draftCard), dispatch, {
	        request: _constants2.default.UPDATE_CARD,
	        success: _constants2.default.UPDATE_CARD_SUCCESS,
	        failure: _constants2.default.UPDATE_CARD_ERROR
	      }, { card: card, draftCard: draftCard });
	    };
	  },
	  updateCardStatus: function updateCardStatus(cardId, listId) {
	    return {
	      type: _constants2.default.UPDATE_CARD_STATUS,
	      payload: { cardId: cardId, listId: listId },
	      meta: {
	        throttle: true
	      }
	    };
	  },
	  updateCardPosition: function updateCardPosition(cardId, afterId) {
	    return {
	      type: _constants2.default.UPDATE_CARD_POSITION,
	      payload: { cardId: cardId, afterId: afterId },
	      meta: {
	        throttle: true
	      }
	    };
	  },
	
	
	  //Warning: This type of usage does not support server-side rendering.
	  //see this SO answer for more on this http://stackoverflow.com/a/35674575/1434764
	  persistCardDrag: function persistCardDrag(cardProps) {
	    return function (dispatch, getState) {
	      var card = (0, _cardUtils.getCard)(getState().cards, cardProps.id);
	      var cardIndex = (0, _cardUtils.getCardIndex)(getState().cards, cardProps.id);
	      (0, _ReduxDispatcher.dispatchAsync)(_KanbanApi2.default.persistCardDrag(card.id, card.status, cardIndex), dispatch, {
	        request: _constants2.default.PERSIST_CARD_DRAG,
	        success: _constants2.default.PERSIST_CARD_DRAG_SUCCESS,
	        failure: _constants2.default.PERSIST_CARD_DRAG_ERROR
	      }, { cardProps: cardProps });
	    };
	  },
	  createDraft: function createDraft(card) {
	    return {
	      type: _constants2.default.CREATE_DRAFT,
	      payload: card
	    };
	  },
	  updateDraft: function updateDraft(field, value) {
	    return {
	      type: _constants2.default.UPDATE_DRAFT,
	      payload: { field: field, value: value }
	    };
	  }
	};
	
	exports.default = CardActionCreators;

/***/ },

/***/ 795:
/*!**********************!*\
  !*** ./app/utils.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.throttle = undefined;
	
	__webpack_require__(/*! babel-polyfill */ 262);
	
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

/***/ 796:
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
	
	var _CardForm = __webpack_require__(/*! ./CardForm */ 797);
	
	var _CardForm2 = _interopRequireDefault(_CardForm);
	
	var _CardActionCreators = __webpack_require__(/*! ../actions/CardActionCreators */ 794);
	
	var _CardActionCreators2 = _interopRequireDefault(_CardActionCreators);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
	var _cardUtils = __webpack_require__(/*! ../cardUtils */ 261);
	
	__webpack_require__(/*! babel-polyfill */ 262);
	
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
	      this.props.updateDraft(field, value);
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      var cards = this.context.store.getState().cards;
	      this.props.updateCard((0, _cardUtils.getCard)(cards, this.props.params.card_id), this.props.draft);
	
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
	
	      var cards = this.context.store.getState().cards;
	      setTimeout(function () {
	        _this2.props.createDraft((0, _cardUtils.getCard)(cards, _this2.props.params.card_id));
	      }, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_CardForm2.default, { draftCard: this.props.draft,
	        buttonLabel: 'Edit Card',
	        handleChange: this.handleChange.bind(this),
	        handleSubmit: this.handleSubmit.bind(this),
	        handleClose: this.handleClose.bind(this) });
	    }
	  }]);
	
	  return EditCard;
	}(_react.Component);
	
	//The code below enables access the store via the React context.
	//The code that uses it is in componentDidMount, line 33
	//see section called "Passing the Store" in http://redux.js.org/docs/basics/UsageWithReact.html for more info
	
	
	EditCard.contextTypes = {
	  store: _react2.default.PropTypes.object
	};
	
	function mapStateToProps(state) {
	  return {
	    draft: state.draftCard
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    updateDraft: function updateDraft(field, value) {
	      return dispatch(_CardActionCreators2.default.updateDraft(field, value));
	    },
	    updateCard: function updateCard(card, draftCard) {
	      return dispatch(_CardActionCreators2.default.updateCard(card, draftCard));
	    },
	    createDraft: function createDraft(card) {
	      return dispatch(_CardActionCreators2.default.createDraft(card));
	    }
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditCard);

/***/ },

/***/ 797:
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

/***/ 798:
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
	
	var _CardForm = __webpack_require__(/*! ./CardForm */ 797);
	
	var _CardForm2 = _interopRequireDefault(_CardForm);
	
	var _CardActionCreators = __webpack_require__(/*! ../actions/CardActionCreators */ 794);
	
	var _CardActionCreators2 = _interopRequireDefault(_CardActionCreators);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
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
	      this.props.updateDraft(field, value);
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.addCard(this.props.draft);
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
	        return _this2.props.createDraft();
	      }, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_CardForm2.default, { draftCard: this.props.draft,
	        buttonLabel: 'Create Card',
	        handleChange: this.handleChange.bind(this),
	        handleSubmit: this.handleSubmit.bind(this),
	        handleClose: this.handleClose.bind(this) });
	    }
	  }]);
	
	  return NewCard;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    draft: state.draftCard
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    updateDraft: function updateDraft(field, value) {
	      return dispatch(_CardActionCreators2.default.updateDraft(field, value));
	    },
	    addCard: function addCard(card) {
	      return dispatch(_CardActionCreators2.default.addCard(card));
	    },
	    createDraft: function createDraft(card) {
	      return dispatch(_CardActionCreators2.default.createDraft(card));
	    }
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewCard);

/***/ }

});
//# sourceMappingURL=main.js.map