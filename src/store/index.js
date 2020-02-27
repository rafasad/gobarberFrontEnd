import { persistStore } from 'redux-persist';
import CreateSagaMiddleware from 'redux-saga';

import CreateStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = CreateSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = CreateStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
