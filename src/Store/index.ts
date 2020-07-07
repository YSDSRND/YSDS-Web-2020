import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { optionsReducer } from './Options/OptionsReducer';
import {postsPageReducer} from "./PostsPage/PostsPageReducer";


const rootReducer = combineReducers({
  options: optionsReducer,
  postPage: postsPageReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares : any = [];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );

  return store;
}
