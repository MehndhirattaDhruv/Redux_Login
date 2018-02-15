import { createStore, combineReducers, applyMiddleware } from 'redux'//responsible for 3 principles hold current state object,action despatch
import * as reducers from './reducers';//and now 3 rd principle which need type of reducer how state is updated with actions
import thunk from 'redux-thunk'



const reducer = combineReducers({
  ...reducers
})

const store = createStore(
 reducer,
applyMiddleware(thunk)
)

export default store;
