import { NavLink, useNavigate } from "react-router-dom"

export default function Navbar() {

    const navigate = useNavigate()

    function logout(e) {
        e.preventDefault()
        localStorage.clear()
        navigate('/login')
    }

    function RegisterAdmin(e) {
        e.preventDefault()
        navigate('/register')
    }

    return (
        <>
            <nav className="navbar border-bottom border-bottom-dark d-flex justify-content-between">
                {/* <!-- Navbar content --> */}
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <p className="mx-2">Customer Service</p>
                    <p className="mx-2">Mencari Lokasi Toko</p>
                    <p className="mx-2">•••</p>
                </div>
                <div className="align-items-center">
                    <div className="d-flex justify-content-center">
                    <NavLink to={'/'}><img src="https://pbs.twimg.com/media/Du2FBqOX4AALUoa.jpg"
                        alt="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgxnbE5BMOTY%2Fhqdefault.jpg"
                        style={{ width: "75px" }} /></ NavLink >
                    </div>
                    <div className="d-flex justify-content-evenly">
                            <a className="px-2 text-dark" style={{cursor: "pointer"}}>Wanita</a>
                            <a className="px-2 text-dark" style={{cursor: "pointer"}}>Pria</a>
                            <a className="px-2 text-dark" style={{cursor: "pointer"}}>Divided</a>
                            <a className="px-2 text-dark" style={{cursor: "pointer"}}>Baby</a>
                            <a className="px-2 text-dark" style={{cursor: "pointer"}}>Anak-Anak</a>
                            <a className="px-2 text-dark" style={{cursor: "pointer"}}>Sport</a>
                            <a className="px-2 text-dark" style={{cursor: "pointer"}}>Sale</a>
                    </div>
                </div>
                <div className="d-flex justify-content-end align-items-center mt-2">
                    <p className="mx-2">Masuk Akun</p>
                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Bahasa Indonesia
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">English</a></li>
                            <li><a className="dropdown-item" href="#">Arabic</a></li>
                        </ul> </div>
                    <p className="mx-2">♥ Favorit</p>
                    <p className="mx-2">Tas Belanja(0)</p>
                </div>
            </nav>
        </>
    )
}