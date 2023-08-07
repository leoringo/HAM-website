import { SUCCESS_FETCH_PRODUCTS, SUCCESS_PRODUCTSBYID } from "../actions/actionType";

const initialState = {
    products: [],
    productDetail: {
        
    }
}


export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case SUCCESS_PRODUCTSBYID:
            return {
                ...state,
                productDetail: action.payload
            }
        default:
            return state
    }
}

