

// const WITHDRAW_MONEY="WITHDRAW_MONEY"
// const DEPOSET_MONEY="DEPOSET_MONEY"

import { DEPOSET_MONEY, WITHDRAW_MONEY } from "../ACTION/action";

export const bankReduser =(state=1000, action)=>{


switch (action.type) {

        case WITHDRAW_MONEY:
        return state - action.payload;

         case DEPOSET_MONEY:
        return state + action.payload
        
        

    default:
     return  state
}





}