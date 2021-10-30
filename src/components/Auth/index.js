import { useState } from "react"
import { NavLink, useParams } from "react-router-dom"

const AuthIndex = () => {
    const [details, setDetails] = useState({
        email: "",
        password: ""
    })
    const params = useParams()

    const handleInput = e => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmission = e => {
        e.preventDefault();
        console.log(details)
    }

    return (
        <div className="auth-container">
            <div className="auth-container--box">
                <div className="tab-selector">
                    <NavLink exact to={"/login"}><h3>Login</h3></NavLink>
                    <NavLink exact to={"/signup"}><h3>Signup</h3></NavLink>
                </div>
                <form autoComplete={"off"} onSubmit={handleSubmission}>
                    <div className="input-wrap">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Enter Email" 
                            value={details.email} 
                            onChange={handleInput}
                        />
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter Password" 
                            value={details.password}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="button-wrap">
                        <button className="login-btn">
                            {params.type === "login" ? "Login" : "Signup"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AuthIndex