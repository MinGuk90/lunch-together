import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";

export const history = createBrowserHistory();

//rootreducer
const rootReducer = combineReducers({
  user: User,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

//지금 어느 환경인 지 알려줘요. (개발환결, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

//logger
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

//redux devTools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

//middleware 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//미들웨어랑 루트 스토어 엮어서 스토어 만들기
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
