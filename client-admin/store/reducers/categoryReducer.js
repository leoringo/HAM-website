import { SUCCESS_CATEGORYBYID, SUCCESS_FETCH_CATEGORIES } from "../actions/actionType"

const initialState = {
    categories: [],
    categoryDetail: {
        name: ''
    }
}


export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };

        case SUCCESS_CATEGORYBYID:
            return {
                ...state,
                categoryDetail: action.payload
            };

        default:
            return state
    }
}