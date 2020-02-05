import React from 'react';
import './Signin.css';
import {Link} from 'react-router-dom';

const SignUp = (props)=>{
    return(
         
          
                <div className="signIn-Box">
                    <h1>SignUp</h1>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' color="white"/>
                    <input type="text" placeholder='Company Name'/>
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password'/>
                   <Link to='/home'>
                    <input type="submit" value=" SignUp"/>
                    </Link>
                
                 </div>
        
    );
}
export default SignUp;