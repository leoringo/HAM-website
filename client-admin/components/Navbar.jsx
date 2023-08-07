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
            <nav className="navbar bg-dark border-bottom border-bottom-dark d-flex justify-content-between" data-bs-theme="dark">
                {/* <!-- Navbar content --> */}
                <div> 
                   <button onClick={RegisterAdmin} type="button" className="btn btn-dark">Register Admin</button>
                </div>
                <div className="align-items-center">
                    <NavLink to={'/'}><img src="https://pbs.twimg.com/media/Du2FBqOX4AALUoa.jpg"
                        alt="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgxnbE5BMOTY%2Fhqdefault.jpg"
                        style={{ width: "50px" }} /></ NavLink >
                </div>
                <div className="d-flex justify-content-end">
                    {/* <a href=""><button type="button" className="btn btn-dark">Products</button></a> */}
                    <div className="p-2">
                        <NavLink to={'/products'} className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink>
                    </div>
                    <div className="p-2">
                        <NavLink to={'/categories'} className={({ isActive }) => isActive ? "active" : ""}>Category</NavLink>
                    </div>
                    <div className="p-2">
                        <NavLink onClick={logout}>Log out</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}