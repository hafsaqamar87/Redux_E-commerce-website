import React, { useState } from 'react';
import { connect } from 'react-redux';
import './login.css';
import { useHistory } from 'react-router';
const Login = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    }),
        onChange = (e) => {
            setData(state => ({
                ...state,
                [e.target.name]: e.target.value
            }))
        }

        const history = useHistory(); 
    const onSubmit = (e) => {
        e.preventDefault()
        const inputs = Object.keys(e.target)
            .filter(key => e.target[key].tagName === 'INPUT')
            .map(key => e.target[key])
        for (const input of inputs) {
            if (!data[input.name]) {
                alert(`Please enter your ${[input.name]}`)
                document.getElementsByName([input.name])[0].focus()
                return false
            }
            else
            alert("you are logged in")
            history.push('/')
            
        }
    }

    return (
        <>
            <div>

                <div className="login" >

                    <form className="login-form"
                        onSubmit={onSubmit}
                    >
                        <img className="login-img"
                            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                            alt="profile-img"
                            height="100px"
                        />
                        <h1>Login Here</h1>

                        <input type="name"
                            placeholder="Enter Your Name"
                            name="name"
                            value={data.name}
                            onChange={onChange}

                        />

                        <input type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={data.email}
                            onChange={onChange}

                        />

                        <input type="password"
                            name="password"
                            placeholder="Enter Your password"
                            value={data.password}
                            onChange={onChange}

                        />
                        <button type="submit" className="submit-btn">Login</button>
                    </form>
                </div>
            </div>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        logindata: state.login.logindata
    };
};

export default connect(mapStateToProps)(Login);



