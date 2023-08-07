import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
    const navigate = useNavigate()

    function detailProductButton(e) {
        e.preventDefault()
        navigate('/products/' + product.id)
    }

    console.log(product);
    return (
        <div className="card mx-2" style={{width: "18rem"}}>
            <img style={{height: "50%" }} src={product.mainImg} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: {product.price}</p>
                    <a onClick={detailProductButton} className="btn btn-primary">Product Detail</a>
                </div>
        </div>
    )
}