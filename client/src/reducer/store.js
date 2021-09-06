import {createStore,applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import logger from 'redux-logger';

/* const middleware= [thunk,logger]; */
import createSagaMiddleware from 'redux-saga';


import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware,logger];

export const store= createStore(rootReducer,applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);


export const persistor= persistStore(store);
export default {store,persistor};
