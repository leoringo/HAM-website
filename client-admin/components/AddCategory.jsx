import { useDispatch, useSelector } from "react-redux"
import { addCategories, editCategory, getCategoryById } from "../store/actions/actionCreator"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



export default function AddCategory() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { catId } = useParams()

    const { categoryDetail } = useSelector((state) => {
        return state.categories
    })

    console.log(categoryDetail, `@@@@@@@@@@@`);

    const [category, setCategory] = useState({
        name: ''
    })

    function eventHandler(e) {
        setCategory(current => {
            return { ...current, [e.target.name]: e.target.value }
        })
    }

    function addCategoryHandler(e) {
        e.preventDefault()
        dispatch(addCategories(category))
            .then(() => {
                navigate('/categories')
            }).catch((err) => {
                console.log(err);
            });
    }

    function editCategoryByIdHandler(e) {
        e.preventDefault()
        console.log(`masuk sini`)
        dispatch(editCategory(catId, category))
                .then((result) => {
                    navigate('/categories')
                }).catch((err) => {
                    console.log(err, `dari err catch promise`);
                });
    }

    useEffect(() => {
        dispatch(getCategoryById(catId))
        // if (!categoryDetail) {
        //     dispatch(getCategoryById(catId))
        //         .then((result) => {
        //             setCategory((current) => ({
        //                 ...current, name: categoryDetail.name
        //             }))
        //         }).catch((err) => {
        //             console.log(err);
        //         });
        // }
    }, [])

    useEffect(() => {
        if (categoryDetail) {
            setCategory({
                name: categoryDetail.name
            })
        }

    }, [categoryDetail])

    return (
        <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={catId ? editCategoryByIdHandler : addCategoryHandler}>
                <label htmlFor="">Name :</label><br /><br />
                <input type="text" value={category.name} name="name" onChange={eventHandler} placeholder="Category Name..." /><br /><br />
                <button type="submit" className="btn btn-primary">SUBMIT</button>
            </form>
        </div>
    )
}