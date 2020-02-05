import React, { Component } from 'react';
import './Signin.css';
import {Link} from 'react-router-dom';

class SignIn extends Component{
    render(){
return(
<div className="signInPageBG">
    <div className="signIn-Box">
        <h1>Log In</h1>
        <input type="text" placeholder='Email/Username' />
        <input type="password" placeholder='Password'/>
        <Link to='/home'>
        <input type="submit" value="LogIn"/>
        </Link>
       <h style={{color:'whitesmoke'}}> Don't have an Account?</h>
       <Link to='/signup'>
        <input type="button"value='SignUp' />
        </Link>
    </div>
    </div>
);
    }
};

export default SignIn;