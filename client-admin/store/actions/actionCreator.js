import { SUCCESS_FETCH_CATEGORIES, SUCCESS_FETCH_PRODUCTS, BASEURL, SUCCESS_PRODUCTSBYID, SUCCESS_CATEGORYBYID } from "./actionType"

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

const categoriesByIdPayload = (payload) => {
    return {
        type: SUCCESS_CATEGORYBYID,
        payload
    }
}

// -------------------- PRODUCTS ---------------------------

export function fetchProducts() {
    return async (dispatch) => {
        try {
            let response = await fetch(BASEURL + '/products', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': localStorage.access_token
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

export function addProduct(data) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASEURL + '/products', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': localStorage.access_token
                },
                body: JSON.stringify(data)
            })

            let error = await response.json()
            if(response.status !== 201) throw {message: error.message}
            dispatch(fetchProducts())
        }
        catch (error) {
            throw error
        }
    }
}

export function deleteProduct(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASEURL + '/products'+`/${id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': localStorage.access_token
                },
            })
            dispatch(fetchProducts())
            
        }
        catch (error) {
            console.log(error)
        }
    }
}

export function getProductById(id) {
    return async dispatch => {
        try {
            const response = await fetch(BASEURL + `/products/${id}`, {
                method: 'get',
                headers: {
                    'access_token': localStorage.access_token,
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

export function editProduct(id, data) {
    return async dispatch => {
        try {
            const response = await fetch(BASEURL + `/products/${id}`, {
                method: 'put',
                headers: {
                    'access_token': localStorage.access_token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            dispatch(fetchProducts())
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

export function addCategories(data) {
    return async (dispatch) => {
        try {
            let response = await fetch(BASEURL + '/categories',{
                method: 'post',
                headers: {
                    'access_token': localStorage.access_token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            let error = await response.json()

            if(response.status !== 201) throw error

            dispatch(fetchCategories())
        } 
        catch (error) {
            throw error
        }
    }
}

export function deleteCategory(id) {
    return async dispatch => {
        try {
            const response = await fetch(BASEURL + `/categories/${id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': localStorage.access_token
                }
            })
            dispatch(fetchCategories())
        } 
        catch (error) {
         console.log(error);    
        }
    }
}

export function getCategoryById(id) {
    return async dispatch => {
        try {
            const response = await fetch(BASEURL + `/categories/${id}`, {
                method: 'get',
                headers: {
                    'access_token': localStorage.access_token,
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json()
            dispatch(categoriesByIdPayload(result))
        } 
        catch (error) {
            console.log(error);    
        }
    }
}

export function editCategory(id, data) {
    return async dispatch => {
        try {
            const response = await fetch(BASEURL + `/categories/${id}`,{
                method: 'PATCH',
                headers: {
                    'access_token': localStorage.access_token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            let error = await response.json()
            if(response.status !== 201) throw error
        } 
        catch (error) {
            throw error
        }
    }
}


// ------------------ USER --------------------------------
export function adminLogin(data) {
    return async (dispatch) => {
        try {
            let response = await fetch(BASEURL + '/login', {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let result = await response.json()
            if (response.status !== 200) throw result
            localStorage.access_token = result.access_token
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function adminRegister(data) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASEURL + '/register', {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': localStorage.access_token
                }
            })
            let error = await response.json()
            if (response.status !== 201) throw error
        } 
        catch (error) {
            throw error
        }
    }
}