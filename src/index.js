import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import ShowPost from './components/ShowPost';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

document.body.style.backgroundColor = '#ebebeb';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className='container' style={{paddingTop: "20px"}}>
        <Route exact={true} path='/posts/new' component={NewPost} />
        <Route exact={true} path='/' component={Posts} />
        <Route exact path='/posts/show/:id' component={ShowPost} />

      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
