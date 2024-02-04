import { combineReducers, createStore } from "redux";
import { bankReduser } from "./redusers/bank-reduser";
import { productsReduser } from "./redusers/Product-Reduser";



const appreduser= combineReducers({
    bank:bankReduser,
      products:productsReduser,
})


export const store = createStore(appreduser)



