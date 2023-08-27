import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { pizzaReducer } from './reducers/PizzaSlice';

// ...

export const store = createStore(
  pizzaReducer,
  composeWithDevTools(applyMiddleware())
);