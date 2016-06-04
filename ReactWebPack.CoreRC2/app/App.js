import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import reduxStore from './stores/reduxStore';
import reducers from './reducers/index';
import KanbanBoardContainer from './containers/KanbanBoardContainer';
import KanbanBoard from './components/KanbanBoard';
import EditCard from './components/EditCard';
import NewCard from './components/NewCard';

render((
  <Provider store={reduxStore}>
    <Router history={browserHistory}>
      <Route component={KanbanBoardContainer}>
        <Route path="/" component={KanbanBoard}>
          <Route path="new" component={NewCard} />
          <Route path="edit/:card_id" component={EditCard} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root')); 
