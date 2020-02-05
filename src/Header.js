import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header =()=>{
    return(
        <div className="headercss">
              <header >
          <nav>
            <div>
            <h1>LET'S MEET</h1>
            </div>
            <div className='try'>
            <ul>
              <div >
                <Link to ='/Home'>
              <li >Home</li>
              </Link>
              </div>
              <div >
              <Link to='/meetings'>
              <li>Meetings</li>
              </Link>
              </div>

              <div >
              <Link to='/about'>
              <li>About</li>
              </Link>
              </div>

              <div >
              <Link to='/help'>
              <li>Help</li>
              </Link>
              </div>
              
              <div className="list">
                <Link to='/login'>
              <li>LogIn</li>
              </Link>
              <Link to='/signup'>
                <li>SignUp</li>
              </Link>
              </div>



            
            </ul>
            </div>
          </nav>
      </header>
        </div>
    );
}

export default Header;