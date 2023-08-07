import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductById } from "../store/actions/actionCreator"
import { useEffect } from "react"

export default function ProductDetail() {
    const dispatch = useDispatch()
    const { productId } = useParams()

    const { productDetail } = useSelector((state) => {
        return state.products
    })

    console.log(productDetail.Images);

    useEffect(() => {
        dispatch(getProductById(productId))
    }, [])

    return (
        <>
            <div className="d-flex mt-3">
                {productDetail?.Images?.map(e => (
                    <img src={e.imgUrl} style={{ height: "50%", width: "25%" }} alt="" className="d-flex m-2" />
                ))}
            </div>
            <div className="px-5">
                <h4>Product Name : {productDetail.name} </h4>
                <h4>Description : {productDetail.description}</h4>
                <h4>Category : {productDetail?.Category?.name}</h4>
                <h4>Author Name : {productDetail?.User?.username}</h4>
                <h4>Price : <span className="text-danger">{productDetail.price}</span></h4>
                <div className="btn-group d-grip gap-2 col-3">
                    <button type="button" className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        PILIH UKURAN
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">S</a></li>
                        <li><a className="dropdown-item" href="#">M</a></li>
                        <li><a className="dropdown-item" href="#">L</a></li>
                        <li><a className="dropdown-item" href="#">XL</a></li>
                        <li><a className="dropdown-item" href="#">Monster</a></li>
                    </ul> </div>
                <button className="d-grid gap-2 col-3 btn btn-dark mt-2">TAMBAHKAN</button>
            </div>
        </>
    )
}