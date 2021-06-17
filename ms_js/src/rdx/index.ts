import { applyMiddleware, createStore, Store } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { create, combine, StateOf } from 'redux-compact';
import { History , createHashHistory } from 'history';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import {AuthState,reduxAuth} from './auth';

export const hist = createHashHistory();
//export const router = connectRouter(hist);

const appState = combine({
  reduxAuth, 
  // ...
});
const { Actions, reduce } = create(appState);
const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  reduce
})

export type RAppState = StateOf<typeof appState>

export type AppState = {
  router: RouterState,
  reduce: RAppState,
}

const store: Store<AppState> = createStore(  
  createRootReducer(hist),
  applyMiddleware(routerMiddleware(hist), thunk, logger),
);

export { store, Actions, AuthState  };
