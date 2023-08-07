import { useState } from "react";
import { useDispatch } from "react-redux"
import { adminLogin } from "../store/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, setLogin] = useState({
        email: '',
        password: '',
    })

    function loginHandler(e) {
        setLogin(current => {
            return { ...current, [e.target.name]: e.target.value }
        })
    }

    function submitHandler(e) {
        e.preventDefault()
        dispatch(adminLogin(login))
            .then(() => {
                navigate('/')
            }).catch((err) => {
                console.log(err);
            });
                
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">
                <form action="" onSubmit={submitHandler}>
                    <label htmlFor="">Email: </label><br />
                    <input onChange={loginHandler} type="text" name="email" /><br />
                    <label htmlFor="">Password: </label><br />
                    <input onChange={loginHandler} type="password" name="password" /><br /><br />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </>
    )
}