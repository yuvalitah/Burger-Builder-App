import burgerBuilderReducer from "./BurgerBuilder";
import orderReducer from "./Order";
import authReducer from "./Auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

export default rootReducer;


