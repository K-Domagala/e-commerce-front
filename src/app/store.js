import { combineReducers, configureStore } from '@reduxjs/toolkit';

//REDUCERS
// const counterReducer = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREMENT':
//       return state + action.payload;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

const usernameReducer = (state = '', action) => {
  switch(action.type){
    case 'LOG_IN':
      return action.payload;
    case 'LOG_OUT':
      return '';
    default:
      return state;
  }
}

const productsReducer = (state = [], action) => {
  switch(action.type){
    case 'PRODUCTS':
      return action.payload
    default:
      return state;
  }
}

//COMBINED REDUCERS
const allReducers = combineReducers({
  username: usernameReducer,
  products: productsReducer
});

//STORE
export const store = configureStore({reducer: allReducers});