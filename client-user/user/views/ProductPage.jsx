import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../store/actions/actionCreator";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { products } = useSelector((state) => {
        return state.products;
    });

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className="d-flex row mt-2">
            {products.map(e => (
                <ProductCard key={e.id} product={e} />
            ))}
        </div>
    )
}