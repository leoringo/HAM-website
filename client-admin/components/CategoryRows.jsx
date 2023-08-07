import { useNavigate } from "react-router-dom"
import { deleteCategory, getCategoryById } from "../store/actions/actionCreator"
import { useDispatch } from "react-redux"

export default function CategoryRows({ category, index }) {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    function destroyCategory() {
        dispatch(deleteCategory(category.id))
    }

    function toEditCategory() {
        dispatch(getCategoryById(category.id))
            .then((result) => {
                
                navigate(`/categoryEdit/${category.id}`)
            }).catch((err) => {
                
            });
    }
    
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>
                    <div>
                        <button onClick={toEditCategory} className="btn btn-outline-warning">EDIT</button>
                        <button onClick={destroyCategory} className="btn btn-outline-danger">DELETE</button>
                    </div>
                </td>
            </tr>

        </>
    )
}