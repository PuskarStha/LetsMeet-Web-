import React from 'react';
import Header from './Header';
import './App.css';
import SignUp from './SignIn/SignUp';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import Home from './Pages/Home';
import Meetings from './Pages/Meetings';
import About from './Pages/About';
import Help from './Pages/Help';
import PostList from './Dummy-data/UserList';


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
       <Header/>
      </header>
      <main  >
        
       
        <div className="mainpage">
        <Route path='/home' component={Home}/>
        <Route path='/login' component={SignIn}/>
        <Route path='/about' component={About}/> 
        <Route path='/meetings' component={Meetings}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/help' component={Help}/>
        
       
        </div>
        <div className="people">Known people
        <PostList/>
        
        </div>
        <div className="information">informations
      </div>
     
        
      </main>
      </Router>
    </div>
  );
}

export default App;
