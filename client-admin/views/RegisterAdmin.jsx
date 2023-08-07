import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { adminRegister } from "../store/actions/actionCreator"


export default function RegisterAdmin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [admin, setAdmin] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
    })

    function register(e) {
        e.preventDefault()
        dispatch(adminRegister(admin))
            .then((result) => {
                navigate('/')
            }).catch((err) => {
                console.log(err);
            });
    }

    function inputHandler(event) {
        setAdmin((current) => {
            return { ...current, [event.target.name]: event.target.value }
        })
    }

    return (
        <div className="d-flex justify-content-center mt-3">
            <form onSubmit={register}>
                <label htmlFor="">Username :</label> <br />
                <input
                    type="text"
                    onChange={inputHandler}
                    value={admin.username}
                    name="username"
                />
                <br /> <br />
                <label htmlFor="">Email :</label>
                <br />
                <input
                    type="text"
                    onChange={inputHandler}
                    value={admin.email}
                    name="email"
                />
                <br />
                <br />
                <label htmlFor="">Password :</label>
                <br />
                <input
                    type="password"
                    onChange={inputHandler}
                    value={admin.password}
                    name="password"
                />
                <br />
                <br />
                <label htmlFor="">Phone Number :</label>
                <br />
                <input
                    type="text"
                    onChange={inputHandler}
                    value={admin.phoneNumber}
                    name="phoneNumber"
                />
                <br />
                <br />
                <label htmlFor="">Address :</label>
                <br />
                <textarea name="address" cols="30" rows="10" value={admin.address} onChange={inputHandler}></textarea>
                <br />
                <br />
                <button type="submit" className="btn btn-primary">SUBMIT</button>
            </form>
        </div>
    )
}