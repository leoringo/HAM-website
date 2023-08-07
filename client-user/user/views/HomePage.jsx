import { useNavigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate()

    function navigateToProducts(e) {
        e.preventDefault()
        navigate('/products')
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <img src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/W28-Homepage-Ladies-Men-Divided-Kids-Baby-Sport-Final-Final-Sale-70-Off-Bhs.jpg" alt="" style={{ height: "75%", width: "50%" }} className="mt-3" />
            <button onClick={navigateToProducts} className="btn btn-danger mt-2">SHOP NOW</button>
            <h5 className="mt-4">Trending Categories</h5>
            <div className="d-flex">
                <div className="card" style={{width: "10rem", height: "12rem"}}>
                    <img src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/Ladies-Blouses-W28.png" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <p className="d-flex justify-content-center card-text">Blouses</p>
                        </div>
                </div>
                <div className="card" style={{width: "10rem", height: "12rem"}}>
                    <img src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/Divided-Dresses-W28.png" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <p className="d-flex justify-content-center card-text">Dresses</p>
                        </div>
                </div>
                <div className="card" style={{width: "10rem", height: "12rem"}}>
                    <img src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/Ladies-Basics-W28.png" className="card-img-top" alt=""/>
                        <div className="card-body">
                        <p className="d-flex justify-content-center card-text">Basics</p>
                        </div>
                </div>
                <div className="card" style={{width: "10rem", height: "12rem"}}>
                    <img src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/Ladies-Trousers-W28.png" className="card-img-top" alt=""/>
                        <div className="card-body">
                        <p className="d-flex justify-content-center card-text">Trousers</p>
                        </div>
                </div>
                <div className="card" style={{width: "10rem", height: "12rem"}}>
                    <img src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/Men-Jeans-W26.png" className="card-img-top" alt=""/>
                        <div className="card-body">
                        <p className="d-flex justify-content-center card-text">Jeans</p>
                        </div>
                </div>
                <div className="card" style={{width: "10rem", height: "12rem"}}>
                    <img src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/Kids-From99,000-W26.png" className="card-img-top" alt=""/>
                        <div className="card-body">
                        <p className="d-flex justify-content-center card-text">Holiday</p>
                        </div>
                </div>
            </div>
            <img className="w-50 mt-4" src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/W28-Homepage-Sport-Bhs.jpg" alt="" />
            <img className="w-50 mt-4" src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/W27-Men-Festival-Looks-Bhs.jpg" alt="" />
            <img className="w-50 mt-4" src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/W27-Divided-Festival-Looks-Bhs.jpg" alt="" />
        </div>
    )
}