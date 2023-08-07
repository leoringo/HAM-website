import { SUCCESS_FETCH_CATEGORIES } from "../actions/actionType"

const initialState = {
    categories: []
}


export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };

        default:
            return state
    }
}