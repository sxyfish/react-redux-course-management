/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import '../node_modules/toastr/build/toastr.min.css';
import * as checkLocal from './store/localStorage';



const store = configureStore();
debugger;
if (checkLocal.loadTag() === undefined) {
    debugger;
    store.dispatch(loadCourses());
    store.dispatch(loadAuthors());
    checkLocal.setTag();
}

store.subscribe(() => {

    console.log('state changed!!!');
    debugger;
    checkLocal.saveState(store.getState());
    const listern = checkLocal.loadState();

});


render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider >,
    document.getElementById('app')
);

