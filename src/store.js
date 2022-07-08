import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';


import thunk from 'redux-thunk'


const FinalReducer = combineReducers(
  {
 
  

  }
)




const currentuser = localStorage.getItem('currentuser') ? JSON.parse(localStorage.getItem('currentuser')) : null


const InitialState = {
  LoginReducer : {currentuser:currentuser}
  
}



const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(FinalReducer, InitialState, composeWithDevTools(
  applyMiddleware(thunk)

))


export default store;