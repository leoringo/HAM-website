import { SUCCESS_FETCH_CATEGORIES, SUCCESS_FETCH_PRODUCTS, BASEURL, SUCCESS_PRODUCTSBYID} from "./actionType"

const productsPayload = (payload) => {
    return {
        type: SUCCESS_FETCH_PRODUCTS,
        payload
    }
}

const productsByIdPayload = (payload) => {
    return {
        type: SUCCESS_PRODUCTSBYID,
        payload
    }
}

const categoriesPayload = (payload) => {
    return {
        type: SUCCESS_FETCH_CATEGORIES,
        payload
    }
}

// -------------------- PRODUCTS ---------------------------

export function fetchProducts() {
    return async (dispatch) => {
        try {
            let response = await fetch(BASEURL + '/c/products', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            let result = await response.json()
            dispatch(productsPayload(result))
        }
        catch (error) {
            console.log(error);
        }
    }
}



export function getProductById(id) {
    return async dispatch => {
        try {
            const response = await fetch(BASEURL + `/c/products/${id}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application.json'
                }
            })
            const result = await response.json()
            dispatch(productsByIdPayload(result))
        } 
        catch (error) {
            console.log(error)
        }
    }
}


// ------------------- CATEGORIES -------------------------
export function fetchCategories() {
    return async (dispatch) => {
        try {
            let response = await fetch(BASEURL + '/categories', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': localStorage.access_token
                }
            })

            let result = await response.json()
            dispatch(categoriesPayload(result))
        }
        catch (error) {
            console.log(error);
        }
    }
}
