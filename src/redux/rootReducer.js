import { combineReducers } from "redux";
import { cartReducer } from "./cart/reducer";
import { withReduxStateSync } from "redux-state-sync";

import { productReducer } from "./products/reducers";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default withReduxStateSync(rootReducer);
