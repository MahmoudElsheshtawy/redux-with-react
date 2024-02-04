import { ADD_PRODUCTS, GET_PRODUCTS } from "../ACTION/action";

export const productsReduser =(state=[{id:'1',title:"im-heare"}],action)=>{

switch (action.type) {
    case GET_PRODUCTS:
        return[...action.payload]
        case ADD_PRODUCTS:
            return[...state ,action.payload]
        

    default:
        return state
}



}