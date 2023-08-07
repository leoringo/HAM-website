import { useEffect, useState } from "react";
import { addCategories, fetchCategories } from "../store/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import CategoryRows from "./CategoryRows";
import { useNavigate } from "react-router-dom";



export default function tableCategory() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {categories} = useSelector((state) => {
        return state.categories
    })

    function navigateAddForm() {
        navigate('/add/category')
    }

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div className="px-5">
            <div className="d-flex justify-content-center">
                <h1 className="mt-2">Category Table</h1>
            </div>
            <div className="d-flex justify-content-end mb-3">
                <button onClick={navigateAddForm} className="btn btn-primary">+ Category</button>
            </div>
            <table className="table table-dark" style={{width: '70%', margin: '0 auto'}}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((e, i) => (
                       <CategoryRows key={e.id} category={e} index={i}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}