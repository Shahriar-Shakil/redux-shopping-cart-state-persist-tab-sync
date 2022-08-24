import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

function configureStore(initialState = {}) {
  const middlewares = [createStateSyncMiddleware({})];

  const store = createStore(
    persistReducer(
      {
        key: "root",
        debug: true,
        storage,
      },
      rootReducer
    ),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
    console.log("restoredState", store.getState());
  });
  initMessageListener(store);
  return { store, persistor };
}

export default configureStore;
