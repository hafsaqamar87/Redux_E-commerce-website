import React ,{useState}from 'react';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
   
    const[signUpdata, setsignUpData] = useState({
        firstName: '',
        lastName:'',
        email: '',
        password: '',
        confirmPassword: ''
    }),
   
    onChange = (e) => {
        setsignUpData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
const history=useHistory();
    const onSubmit = (e) => {
        
        e.preventDefault()
        const inputs = Object.keys(e.target)
            .filter(key => e.target[key].tagName === 'INPUT')
            .map(key => e.target[key])
        for (const input of inputs) {
            if (!signUpdata[input.name]) {
                alert('Please enter all required fields')
                document.getElementsByName([input.name])[0].focus()
                break;
            }
            else{
                alert("your account has been created")
                history.push("/CheckOut")
            }
          
        }
    }
    return (
        <>
            <div>

                <div className="signUp" >

                    <form className="signUp-form" onSubmit={onSubmit}>
                        <h1>Sign Up Here</h1>
                        <p>Please fill in this form to create an account!</p>
                        <input type="name"
                            placeholder="Enter Your First Name"
                            name="firstName"
                        value={signUpdata.firstName}
                        onChange={onChange}

                        />
                        <input type="name"
                            placeholder="Enter Your Last Name"
                            name="lastName"
                        value={signUpdata.lastName}
                        onChange={onChange}

                        />

                        <input type="email"
                            name="email"
                            placeholder="Enter Your Email"
                        value={signUpdata.email}
                        onChange={onChange}

                        />

                        <input type="password"
                            name="password"
                            placeholder="Enter Your password"
                        value={signUpdata.password}
                        onChange={onChange}

                        />
                        <input type="password"
                            name="confirmPassword"
                            placeholder="Confirm Your password"
                        value={signUpdata.confirmPassword}
                        onChange={onChange}

                        />
                        <button type="submit" className="submit-btn">Sign Up</button>
                    </form>
                </div>
            </div>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        signUp: state.login.signUp
    };
};

export default connect(mapStateToProps)(SignUp);