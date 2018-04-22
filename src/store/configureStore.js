import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { loadState } from './localStorage';

export default function configureStore() {

    const persistedState = loadState();
    debugger;
    return createStore( 
        rootReducer,
        persistedState,
        applyMiddleware(thunk)
        //applyMiddleware(thunk, reduxImmutableStateInvariant())
        //applyMiddleware(reduxImmutableStateInvariant())
    );
}