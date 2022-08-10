
import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
    cardData: []
}
//export default function cardItems(state=initialState,action){ // added for 0ne item
    export default function cardItems(state=[],action){ // added for multiple item adding

    //eslint-disable-next-line default-case

    switch(action.type){
       
        case ADD_TO_CART:
            //console.warn("reducer",action);
            // return{ // added for single item
            //     ...state,
            //     cardData:action.data
            // }
            return[ // adding for multiple item
                ...state,
                {cardData:action.data}
            ] 
            
            case REMOVE_TO_CART:
                state.pop();
                return[ // adding for multiple item
                    ...state,
                ] 

            break;

         default:
            return state

        
            
    }

}