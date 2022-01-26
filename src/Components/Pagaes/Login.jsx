import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState(true);
    const [signup, setSignup] = useState(false);
    const [loginD, setLoginD] = useState({
        uname: '',
        pass: '',
    });
    const history = useNavigate();
    const LoginEvent = (e) => {
        const { name, value } = e.target;
        setLoginD({
            ...loginD, [name]: value
        })
    }

    const ShowLogin = () => {
        setLogin(true);
        setSignup(false);
    }
    const ShowSignup = () => {
        setLogin(false);
        setSignup(true);
    }

    const SubmitLogin = (e) => {
        e.preventDefault();
        axios.post(`https://fakestoreapi.com/auth/login`, {
            username: loginD.uname,
            password: loginD.pass
        }).then(res => {
            history("/cart");
            setLoginD({
                uname: '',
                pass: '',
            })
            console.log('login successfull',res.data)
        })
        .catch((error) => {
            alert("Please enter a valid email or password");
        });
    }

    return (
        <>
            <div className="login_signup">
                {login && <form className='login_form' onSubmit={SubmitLogin}>
                    <h1 className='login_heading'>Login</h1>
                    <div className="input_wrap">
                        <div className="form_group">
                            <label>Username</label>
                            <input type="text" placeholder='Username' name="uname" value={loginD.uname} onChange={LoginEvent} />
                        </div>
                    </div>
                    <div className="input_wrap">
                        <div className="form_group">
                            <label>Password</label>
                            <input type="password" placeholder='Password' name="pass" value={loginD.pass} onChange={LoginEvent} />
                        </div>
                    </div>
                    <div className="btn_wrap">
                        <button>Login</button>
                    </div>
                </form>}
                {signup && <form className='signup_form'>
                    <h1 className='login_heading'>Sign Up</h1>
                    <div className="input_wrap">
                        <div className="form_group">
                            <label>First Name</label>
                            <input type="text" placeholder='First name' />
                        </div>
                        <div className="form_group">
                            <label>Last Name</label>
                            <input type="text" placeholder='Last name' />
                        </div>
                    </div>
                    <div className="input_wrap">
                        <div className="form_group">
                            <label>Username</label>
                            <input type="text" placeholder='Username' />
                        </div>
                        <div className="form_group">
                            <label>Password</label>
                            <input type="password" placeholder='Password' />
                        </div>
                    </div>
                    <div className="input_wrap">
                        <div className="form_group">
                            <label>Email</label>
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className="form_group">
                            <label>Phone</label>
                            <input type="text" placeholder='Phone' />
                        </div>
                    </div>
                    <div className="input_wrap">
                        <div className="form_group">
                            <label>City</label>
                            <input type="text" placeholder='City' />
                        </div>
                        <div className="form_group">
                            <label>Street</label>
                            <input type="text" placeholder='Street' />
                        </div>
                    </div>
                    <div className="input_wrap">
                        <div className="form_group">
                            <label>House No</label>
                            <input type="text" placeholder='House no' />
                        </div>
                        <div className="form_group">
                            <label>PIN Code</label>
                            <input type="text" placeholder='Pin code' />
                        </div>
                    </div>
                    <div className="btn_wrap">
                        <button>Sign Up</button>
                    </div>
                </form>}

                <div className="user_suugesation">
                    <p onClick={ShowLogin}>New here? <span>Login</span></p>
                    <p onClick={ShowSignup}>Already have an account? <span>Signup</span></p>
                </div>
            </div>
        </>
    )
}

export default Login;
