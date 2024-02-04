import {thunk} from 'redux-thunk'
import { combineReducers, createStore,applyMiddleware  } from "redux";
import { bankReduser } from "./redusers/bank-reduser";
import { productsReduser } from "./redusers/Product-Reduser";



const appreduser= combineReducers({
    bank:bankReduser,
      products:productsReduser,
})


export const store = createStore(appreduser,applyMiddleware (thunk))



